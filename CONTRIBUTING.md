# Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit [https://cla.microsoft.com](https://cla.microsoft.com).

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repositories using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Initial set up

To start off, fork this repo on GitHub.

### Clone the forked repo

Once the repo is forked, clone your fork locally using one of the following methods.

**Using SSH**

```
git clone git@github.com:{your-github-username}/vscode-webview-toolkit.git
```

**Using HTTPS**

```
git clone https://github.com/{your-github-username}/vscode-webview-toolkit.git
```

**Using GitHub CLI**

```
gh repo clone {your-github-username}/vscode-webview-toolkit
```

### Set an upstream remote

Next, add an upstream remote pointing to the primary toolkit repo.

```
cd vscode-webview-toolkit/
git remote add upstream https://github.com/microsoft/vscode-webview-toolkit.git
git fetch upstream main
```

### Install dependencies

Install the project dependencies.

```
npm install
```

### Create a branch

Create a branch for local development. Once that is complete, you can start making your changes locally.

```
git checkout -b {branch-name}
```

## Validate changes

When you're done making changes, check that your changes pass linting, formatting, tests, and that both the toolkit package and docs site can be built without errors.

```
npm run lint
npm run fmt
npm run test
npm run build
npm run build:docs
```

### Add and commit changes

Commit your changes and push your branch to GitHub.

```
git add .
git commit -m "Detailed description of your changes."
```

### Pull any upstream changes

If there are new commits from upstream's `main` branch since your last git pull, you need
to merge the latest commits from upstream's `main` into your branch and resolve any
merge conflicts locally.

If there are no new commits from upstream's `main`, you can skip the following steps.

1. Get the latest commits.

    ```
    git checkout main
    git pull --rebase upstream main
    ```

2. Merge the latest commits into your branch.

    ```
    git checkout {branch-name}
    git merge main
    ```

3. Resolve any merge conflicts and run all the linting, formatting, tests, and builds again.

### Push local changes

Push your branch to GitHub.

```
git push origin {branch-name}
```

### Deploy forked docs site

You can also build and deploy the Storybook docs website to your forked repo's GitHub Pages for a live preview of your changes.

_Note: If you're working on component features or bug fixes we will ask for this link to view your work._

```
npm run deploy:docs
```

Once deployed, the site should be viewable at the following link: https://{your-github-username}.github.io/vscode-webview-toolkit/

The first time you deploy the docs site, navigating to this link will likely result in a 401 error. This is because GitHub Pages defaults to private visibility. To change this:

-   Navigate to the "Settings" page of your forked repo
-   Click the "Pages" sidebar tab
-   Find the "GitHub Pages visibility" dropdown settings option and change it to "Public"
-   Complete the confirmation popup dialog
-   The site should now be publicly viewable!

### Submit a pull request

Finally, submit a pull request to the main toolkit repository through the GitHub website.

## Long term repo maintenance

Once your branch has been merged into upstream's `main` branch, if you want to keep your remote and local repo clean, you can delete your branch.

```
git push origin --delete {branch-name}
git branch -D {branch-name}
```

Finally, you can keep your fork's `main` branch up-to-date with upstream's `main` branch.

```
git checkout main
git pull --rebase upstream main
git push origin main
```
