import os, shutil, sys, json
from git import Repo
from random import random
from github import Github
import github
from github.Repository import Repository
from datetime import datetime

# Configuration
REPO_NAME = os.getenv('REPO_NAME')
REPO_TITLE = os.getenv('REPO_TITLE')
REPO_WEBSITE = os.getenv('REPO_WEBSITE')
REPO_SUPPORT = os.getenv('REPO_SUPPORT')
REPO_DONATE = os.getenv('REPO_DONATE')
REPO_SUBMIT_MODULE = os.getenv('REPO_SUBMIT_MODULE')
REPO_SCOPE = os.getenv('REPO_SCOPE')

# Initialize the GitHub objects
g = Github(os.environ['GIT_TOKEN'])
user = g.get_user(REPO_NAME)
repos = user.get_repos()

# Skeleton for the repository
meta = {
    # Fetch the last repository update
    "last_update": int(user.updated_at.timestamp() * 1000),
    "name": REPO_TITLE,
    "website": REPO_WEBSITE,
    "support": REPO_SUPPORT,
    "donate": REPO_DONATE,
    "submitModule": REPO_SUBMIT_MODULE,
    "modules": []
}

def convert_value(value):
    # Convert boolean values
    if value.lower() == 'true':
        return True
    elif value.lower() == 'false':
        return False
    # Convert integer values
    try:
        return int(value)
    except ValueError:
        # Convert float values
        try:
            return float(value)
        except ValueError:
            # Keep string values as is
            return value

def does_object_exists(repo: Repository, object_path: str) -> bool:
    try:
        repo.get_contents(object_path)
        return True
    except github.UnknownObjectException:
        return False

# Iterate over all public repositories
for repo in repos:
    # It is possible that module.prop does not exist (meta repo)
    try:
        moduleprop = repo.get_contents("module.prop")
        moduleprop_raw = moduleprop.decoded_content.decode("UTF-8")

        if not does_object_exists(repo, "module.prop"):
            continue

        properties = {}
        for line in moduleprop_raw.splitlines():
            if "=" not in line:
                continue
            lhs, rhs = line.split("=", 1)
            properties.update({
               lhs: convert_value(rhs)
            })

        # Get the last update timestamp of the module.prop file
        last_update_timestamp = moduleprop.last_modified

        # Convert the string to a datetime object
        last_update_datetime = datetime.strptime(last_update_timestamp, '%a, %d %b %Y %H:%M:%S %Z')

        # Get the timestamp of the last update
        last_update_timestamp = datetime.timestamp(last_update_datetime)

        module = {
            "id": properties.get("id"),
            # Check if META-INF folder exists, which is required to install modules
            "valid": does_object_exists(repo, "META-INF"),
            "last_update": int(last_update_timestamp * 1000),
            "prop_url": f"https://raw.githubusercontent.com/{repo.full_name}/{repo.default_branch}/module.prop",
            "zip_url": f"https://github.com/{repo.full_name}/archive/{repo.default_branch}.zip",
            "notes_url": f"https://raw.githubusercontent.com/{repo.full_name}/{repo.default_branch}/README.md",
            "stars": int(repo.stargazers_count),
            "props": properties,
        }

        # Handle file to ignore the index process for the current module
        if properties.get("noIndex") or properties.get("gr_ignore"):
            continue
        else:
            repo_dir = f"module/{repo.name}"
            Repo.clone_from(repo.clone_url, repo_dir)
            shutil.make_archive(f"modules/{repo.name}", 'zip', repo_dir)

            # Append to skeleton
            meta.get("modules").append(module)

    except:
        continue

# Return our final skeleton
f = open(f"{REPO_SCOPE}.json", "w")
f.write(json.dumps(meta, indent=4))
f.close()
