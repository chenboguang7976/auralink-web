"""Fill size + SHA-256 for every download in tools/releases.json from GitHub Releases.

    python tools/sync_releases.py           # update releases.json in place
    python tools/sync_releases.py --check   # CI: fail if a file is missing or out of date

Uses the public GitHub API; set GITHUB_TOKEN to avoid the anonymous rate limit.
"""
import io, json, os, sys, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, "tools", "releases.json")
REPO = "chenboguang7976/auralink-web"

def fetch_assets():
    req = urllib.request.Request("https://api.github.com/repos/%s/releases?per_page=100" % REPO,
                                 headers={"Accept": "application/vnd.github+json"})
    if os.environ.get("GITHUB_TOKEN"):
        req.add_header("Authorization", "Bearer " + os.environ["GITHUB_TOKEN"])
    with urllib.request.urlopen(req, timeout=30) as r:
        releases = json.load(r)
    return {(rel["tag_name"], a["name"]): a for rel in releases for a in rel["assets"]}

def main():
    check = "--check" in sys.argv
    data = json.load(io.open(PATH, encoding="utf-8"))
    assets = fetch_assets()
    problems, changed = [], False
    for key, d in data["downloads"].items():
        a = assets.get((d["tag"], d["file"]))
        if not a:
            problems.append("%s: %s/%s is not on GitHub Releases" % (key, d["tag"], d["file"]))
            continue
        sha = (a.get("digest") or "").replace("sha256:", "") or d.get("sha256")
        if d.get("bytes") != a["size"] or d.get("sha256") != sha:
            if check:
                problems.append("%s: size/sha256 in releases.json differ from GitHub (run sync_releases.py)" % key)
            d["bytes"], d["sha256"] = a["size"], sha
            changed = True
    if problems:
        sys.exit("\n".join(problems))
    if changed and not check:
        s = json.dumps(data, ensure_ascii=False, indent=2) + "\n"
        io.open(PATH, "w", encoding="utf-8", newline="\n").write(s)
        print("releases.json updated")
    else:
        print("releases.json up to date")

if __name__ == "__main__":
    main()
