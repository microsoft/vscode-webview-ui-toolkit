# Contributing

Contributions are welcome, and they are greatly appreciated!

Here's how to set up `vscode-webview-toolkit` for local development.

## Initial Set Up

To start off, fork the `vscode-webview-toolkit` repo on GitHub.

### Clone the Forked Repo

Once the repo is forked, clone your fork locally using one of the following methods:

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

### Set an Upstream Remote

Next, add an upstream remote pointing to the primary toolkit repo:

```
cd vscode-webview-toolkit/
git remote add upstream https://github.com/microsoft/vscode-webview-toolkit.git
git fetch upstream main
```

### Install Dependencies

Install the project dependencies:

```
npm install
```

### Create a Branch

Create a branch for local development:

```
git checkout -b {branch-name}
```

Now you can make your changes locally.

## Submitting Changes

When you're done making changes, check that your changes pass linting, formatting, tests, and that both the toolkit package and docs site can be built without errors:

```
npm run lint
npm run fmt
npm run test
npm run build
npm run build:docs
```

### Add & Commit Changes

Commit your changes and push your branch to GitHub.

```
git add .
git commit -m "Detailed description of your changes."
```

### Pull Any Upstream Changes

If there are new commits from upstream's `main` branch since your last git pull, you need
to merge the latest commits from upstream's `main` into your branch and resolve any
merge conflicts locally.

If there are no new commits from upstream's `main`, you can skip steps 1, 2, and 3.

1. Get the latest commits:

    ```
    git checkout main
    git pull --rebase upstream main
    ```

2. Merge the latest commits into your branch:

    ```
    git checkout {branch-name}
    git merge main
    ```

3. Resolve any merge conflicts and if needed run all the linting, formatting, tests, and builds again.

### Push Local Changes

Push your branch to GitHub:

```
git push origin {branch-name}
```

### Deploy Forked Docs Site

You can also build and deploy the Storybook docs website to your forked repo's GitHub Pages for a live preview of your changes.

_Note: If you're working on component features or bug fixes we will ask for this link to view your work._

```
npm run deploy:docs
```

Once deployed, the site should be viewable at the following link: https://{your-github-username}.github.io/vscode-webview-toolkit/

Finally, note that the first time you deploy the docs site, navigating to this link will likely result in a 401 error. This is because GitHub Pages defaults to private visibility. To change this:

-   Navigate to the "Settings" page of your forked repo
-   Click the "Pages" sidebar tab
-   Find the "GitHub Pages visibility" dropdown settings option and change it to "Public"
-   Complete the confirmation popup dialog
-   The site should now be publicly viewable!

### Submit a Pull Request

Finally, submit a pull request through the GitHub website.

## Long Term Repo Maintenance

Once your branch has been merged into upstream's `main` branch, if you want to keep your remote and local repo clean, you can delete your branch.

```
git push origin --delete {branch-name}
git branch -D {branch-name}
```

Finally, you can keep your fork's `main` branch up-to-date with upstream's `main` branch:

```
git checkout main
git pull --rebase upstream main
git push origin main
```
