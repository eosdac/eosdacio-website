# Submit a pull request
To suggest changes for discussion to the eosDAC website, please [create a fork](https://help.github.com/articles/fork-a-repo) on Github or [update/sync your existing fork](https://help.github.com/en/articles/syncing-a-fork) to the latest version, befor working on your new changes.

Also, please always base your changes and pull requests upon the latest version of the `master` branch of this git repository. It contains the latest version of the website.

The `deploy` branch is only used by the webmaster to keep a copy of the generated HTML/CSS website code (inside the `_site` folder). As a contributor, you do not need to interact with this branch.

 1. Fork the **upstream** git repository (<https://github.com/eosdac/eosdacio-website>) to your own github account: <https://help.github.com/articles/fork-a-repo>
 2. Use tools you're familiar with to edit pages ([Markdown editor](https://jbt.github.io/markdown-editor/), [GitHub Desktop Client](https://desktop.github.com/), [VS Code](https://code.visualstudio.com/), [Atom](https://atom.io/), etc.)
 3. Create pull request back to the original `upstream` repository for your changes, via the Github Web-UI: <https://help.github.com/articles/creating-a-pull-request>

### Best Practice: Feature Branches
If proposing changes via pull requests, you should consider to make use of a **Forking Feature Branch Workflow**, which is widely considered to be the best practice, as it always keeps your `master` branch clean and free of conflicts and allows you to work on multiple, locically separated changes in parallel. Read more about this workflow here:
* <https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow>
* <https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow>


# Tutorials
### Github Desktop (Youtube video)
Watch this video, showing how to propose a change to this website via the *Github Desktop* client on the Windows operating system:
* <https://www.youtube.com/watch?v=uAlnTSHSMrI>

### Command Line
If you're using the command line [git tools](https://git-scm.com/), you go about it like so:
`git clone git@github.com:<YOUR GITHUB USERNAME>/eosdacio-website.git`

Then add an upstream so you can easily update your forked repository following the instructions here: <https://help.github.com/articles/configuring-a-remote-for-a-fork/>
```
# git remote add upstream https://github.com/eosdac/eosdacio-website.git
# git remote -v
origin    git@github.com:<YOUR GITHUB USERNAME>/eosdacio-website.git (fetch)
origin    git@github.com:<YOUR GITHUB USERNAME>/eosdacio-website.git (push)
upstream    https://github.com/eosdac/eosdacio-website.git (fetch)
upstream    https://github.com/eosdac/eosdacio-website.git (push)
```