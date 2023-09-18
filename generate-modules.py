import sys
import json
import os
from github import Github

# Configuration
REPO_NAME = "Googlers-Repo"
REPO_TITLE = "Googlers Magisk Repo"
REPO_WEBSITE = "https://dergoogler.com/repo"
REPO_SUPPORT = "https://t.me/The_Googler"
REPO_DONATE = None
REPO_SUBMIT_MODULE = None

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
            # Convert array values
            if ',' in value:
                return [convert_value(v.strip()) for v in value.split(',')]
            else:
                # Keep string values as is
                return value

# Iterate over all public repositories
for repo in repos:
    # It is possible that module.prop does not exist (meta repo)
    try:
        moduleprop = repo.get_contents("module.prop")
        moduleprop_raw = moduleprop.decoded_content.decode("UTF-8")

        properties = {}
        for line in moduleprop_raw:
            if line.strip() and not line.startswith('#'):
                key, value = line.split('=')
                properties[key.strip()] = convert_value(value.strip())

        module = {
            "id": properties.get("id"),
            "last_update": int(repo.updated_at.timestamp() * 1000),
            "prop_url": f"https://raw.githubusercontent.com/{repo.full_name}/{repo.default_branch}/module.prop",
            "zip_url": f"https://github.com/{repo.full_name}/archive/{repo.default_branch}.zip",
            "notes_url": f"https://raw.githubusercontent.com/{repo.full_name}/{repo.default_branch}/README.md",
            "stars": int(repo.stargazers_count),
            "props": properties,
        }

        # Handle file to ignore the index process for the current module
        if properties.get("noIndex"):
            continue
        else:
            # Append to skeleton
            meta["modules"].append(module)

    except:
        continue

# Return our final skeleton
print(json.dumps(meta, indent=4))
