# Contributing

Here is a list of common guidelines to help maintain a level of quality and accessibility on this project.

## General information

All traces of the development should be kept in English, even in a full French-speaking team. That means branch names, commits, all source code (component names, comments, etc.), merge request titles. The only exception for this is regarding merge requests comments, which can be written in French if deemed necessary.

## Development

New developments should almost always start from the `main` branch. Usually, branch names start with the Jira reference and a short description. This will help us cross-reference features with Jira (if needed).

```bash
# create a new branch from main
(main) $ git checkout -b [AAS]-0123_new-feature-description
([AAS(Angular App Starter)]-0123_new-feature-description) $ ...
``` 
### Commit conventions

This repository relies on [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) to automatically generate its own [changelog](CHANGELOG.md). It is an opinionated way of formatting commits messages, that allows a library to parse it, making it easier to automatically format a changelog file on request (usually when tagging a version).

The convention is documented here: https://conventionalcommits.org/.

### Merge request

Every development must be reviewed by at least another frontend developer, being in the same team or not. This is necessary to prevent shipping bugs that could be spotted by someone who has a fresher view on the produced code. This means that before going to the `main` branch, new code goes through a *merge request* process, on Gitlab.

During review, for fixes that can be pointed to specific commits, amends are preferred to new commits.

```
# stage the changes
$ git add .

# amend the previous commit (keep the same message)
$ git commit --amend --no-edit

# push amended commit to update the merge request
$ git push --force-with-lease
```

For more complex operations, fixup commits can be done during an interactive rebase. Check the internet for more information.

When both the reviewer and the developer are satisfied with the merge request process, the reviewer validates the merge request. Usually, it deletes the source branch in the process to keep the remote repository clean. If the option is not checked by default, ask the project maintainer for help.

## Testing

The test suite can be run with `npm test`. It is also automatically run everytime a branch is pushed onto the remote repository.

## Release

When a specific milestone is achieved in the project's lifecycle, a release should be created to mark a point in the project's development with a version number. When configured in **github-action-workflow.yml ** or **.gitlab-ci.yml**, it also create artifacts that will be archived in our internal package repositories, allowing deployment in production environments.

This version information is referenced in the project's **package.json** and is the single source of truth. This version can be suffixed with a string that informs the current state of the codebase. Here is a summary:

| Version          | State of the codebase                                        |
| ---------------- | ------------------------------------------------------------ |
| *X.Y.Z*-SNAPSHOT | In development, always the case on the `main` branch.      |
| *X.Y.Z*-BETA*x*  | In maintenance branch, translation request has been made.    |
| *X.Y.Z*-RC*x*    | In maintenance branch, translations have been included, and a final QA pass is ongoing. |
| *X.Y.Z*          | In maintenance branch, QA has confirmed the state of the project. |

### Creating a new release

Let's assume the version in the main branch is set to `1.1.0-SNAPSHOT`.

To create a release, a maintenance branch needs to be created. It must keep the same major and minor parts of the development version and add a "maintenance" suffix to it as its name. Here we will have `1.1-maintenance`.

The version process is launched using NPM. Afterwards, in the main branch, the version needs to be updated to a new SNAPSHOT by incrementing the minor part of the previous version (and resetting the patch to 0 if necessary). In essence:

```bash
(main) $ cat package.json | grep version
1.1.0-SNAPSHOT
(main) $ git checkout -b 1.1-maintenance
(1.1-maintenance) $ npm version 1.1-BETA1
...
(1.1-maintenance) $ git checkout main
(main) $ npm version 1.2.0-SNAPSHOT --no-git-tag-version
(main) $ git add -A && git commit -m "chore: update snapshot version"
```

After each `npm version` command, the `postversion` script in **package.json** will automatically push the reference onto the remote repository.
