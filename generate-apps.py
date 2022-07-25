import re
import sys
import json
import os
import regex
from github import Github

# Configuration
REPO_NAME = "Googlers-Repo"
REPO_TITLE = "Googlers Store Repo"
REPO_WEBSITE = "https://dergoogler.com/repo"
REPO_SUPPORT = "https://t.me/The_Googler"
REPO_DONATE = None

# Skeleton for the repository
meta = {
    "last_update": "",
    "name": REPO_TITLE,
    "website": REPO_WEBSITE,
    "support": REPO_SUPPORT,
    "donate": REPO_DONATE,
    "apps": []
}

# Initialize the GitHub objects
g = Github(os.environ['GIT_TOKEN'])
user = g.get_user(REPO_NAME)
repo = user.get_repo("apps")

# Fetch the last repository update
meta["last_update"] = int(user.updated_at.timestamp() * 1000)


contents = repo.get_contents("")
while len(contents) > 0:
    try:
        file_content = contents.pop(0)

        if file_content.type == 'dir':
            # Ignore these folders
            # if file_content.path != ".github" & file_content.path != "core":
            # Parse module.prop into a python object
            moduleprop_raw = repo.get_contents(
                f"{file_content.path}/app.prop").decoded_content.decode("UTF-8")

            moduleprop = {}
            for line in moduleprop_raw.splitlines():
                if "=" not in line:
                    continue
                lhs, rhs = line.split("=", 1)
                moduleprop[lhs] = rhs

            def getProp(name, replace="", replaceValue=""):
                try:
                    tmp = moduleprop[name]
                    return regex.sub(replace, replaceValue, tmp)
                except:
                    return None

            repoconf = {}
            try:
                # repo.conf can override app.prop properties
                repo_config_raw = repo.get_contents(
                    f"{file_content.path}/repo.conf").decoded_content.decode("UTF-8")

                for line in repo_config_raw.splitlines():
                    if "=" not in line:
                        continue
                    lhs, rhs = line.split("=", 1)
                    repoconf[lhs] = rhs
            except:
                repoconf = None

            def getRepoConf(name, replace="", replaceValue=""):
                try:
                    tmp = repoconf[name]
                    return regex.sub(replace, replaceValue, tmp)
                except:
                    return None

            # If an repo is specified, then the app.prop description gets overridden

            def getDescription():
                if getRepoConf("repo") != None:
                    return g.get_repo(getRepoConf("repo")).description
                else:
                    return getProp("description")

            details = {
                "name": getProp("name"),
                "icon": getProp("icon", "{localURL}", f"https://raw.githubusercontent.com/{repo.full_name}/{repo.default_branch}/{file_content.path}"),
                "package": file_content.path,
                "versionName": getProp("versionName"),
                "versionCode": getProp("versionCode"),
                "description": getDescription(),
            }

            def getReadme():
                if getRepoConf("readme") != None:
                    return getRepoConf("readme", r"{Mirror=(.*?):Branch=(.*?):File=(.*?)}", r"https://raw.githubusercontent.com/\1/\2/\3")
                else:
                    return f"https://raw.githubusercontent.com/{repo.full_name}/{repo.default_branch}/{file_content.path}/README.md"

            def getDownloadLink():
                if getRepoConf("repo") != None:
                    if getRepoConf("download") == None:
                        get_latest_release = g.get_repo(getRepoConf(
                            "repo")).get_releases()[0:5]
                        get_latest_release_assests = g.get_repo(getRepoConf(
                            "repo")).get_releases()[0].get_assets()
                        tmp_releases = []

                        for idxx, release in enumerate(get_latest_release):
                            tmp_releases.append({
                                "name": release.title,
                                "id": release.id,
                                "author": release.author.login,
                                "tag_name": release.tag_name,
                                "prerelease": release.prerelease,
                                "published_at": str(release.published_at),
                                "body": release.body,
                                "asset": []
                            })

                            for idx, asset in enumerate(release.get_assets()):
                                tmp_releases[idxx]["asset"].append({
                                    "id": asset.id,
                                    "name": asset.name,
                                    "download": asset.browser_download_url,
                                    "size": asset.size
                                })
                        return tmp_releases
                    else:
                        return getRepoConf("download")
                else:
                    return getProp("download")

            apps = {
                "prop": details,
                "readme_url": getReadme(),
                "theme": f"https://raw.githubusercontent.com/{repo.full_name}/{repo.default_branch}/{file_content.path}/theme.json",
                "contributors": [],
                "download":  getDownloadLink(),
            }

            # Get contributors of the given repository
            if getRepoConf("repo") != None:
                repo_of_app = g.get_repo(getRepoConf("repo"))
                contributors_count = repo_of_app.get_stats_contributors()[0:20]
                for const in contributors_count:
                    apps["contributors"].append({
                        "name": const.author.login,
                        "avatar": const.author.avatar_url,
                        "contributions_count": const.author.contributions
                    })

            # Append to skeleton
            meta["apps"].append(apps)
    except Exception as e:
        print(e)
        continue

# Return our final skeleton
print(json.dumps(meta, indent=4))
