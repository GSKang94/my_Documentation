[Cheatsheet](https://education.github.com/git-cheat-sheet-education.pdf)

### Stash changes and apply to new branch
```
-   git stash
-   git checkout -b xxx
-   git stash pop
```

### git common workflow
* Make SSH key in you local and remote machine.
* git config --global user.name 'GSingh1994'
* git config --global user.email 'singh.gagandeep0034@gmail.com'
* init. a git repo in local machine.
* create files.
* create a branch.
* checkout branch.
* make changes to the files.
* add files to the staging area.
* commit changes.
* create remote repository.
* git remote add origin <add https of remote repo.>
* push changes to github for first time (git push -u origin master)
* again commit changes and upload your progress with <git push>

### Generate SSH keys

```js
ssh-keygen -t rsa -C "singh.gagandeep0034@gmail.com"
//copy ssh key
cat ~/.ssh/id_rsa.pub 
```

## Force push changes

```git
git push origin <your_branch_name> --force
```

## .gitignore

Add files names to this file if you want  git to ignore those files.

## amending a commit

To make corrections in the last commit.

https://github.com/GSingh1994/first-contributions/blob/master/additional-material/git_workflow_scenarios/amending-a-commit.md

## Delete a branch

```js
git branch -d <local_branch_name>
git push origin :<remote_branch_name>
```

## Delete a tag

```js
git tag -d <tag_name>
```

## To fetch a remote PR into your local repo.

```
git fetch origin pull/ID/head:BRANCHNAME
```

where ID is the pull request id and branchname is the name of the new branch that you want to create. Once you have created the branch, then simply

```
git checkout BRANCHNAME
```

## Undoing local changes (before staging)

Use the `checkout` command to checkout the repository’s version of the modified file.

```js
git checkout <modified file name>
```

## Undoing Staged Changes (before commiting)

```js
git reset HEAD <file_name>
```

## Undoing Committed Changes(local)

```js
git revert HEAD
```

## Undo commits

* To rewrite the current branch to point to the specified commit.

* Resetting can confuse other users sharing the branch.

```js
git reset --hard <hash>
```

## Ammending Commits

After making a commit, you've realized that you could include something in that commit or you want to edit message.

```js
git commit --amend -m "Add an author/email comment"
```

## moving files

```
mkdir library
git mv hello.md library
```

## History of all branches

```js
git hist --all
```

## Syncing with origin

We can either use fetch and merge seperately or

we can just use git pull

## Add a local branch that tracks a remote branch

```js
git branch --track <branch> origin/<branch>
```

## Create a bare repository

Bare repositories (without working directories) are usually used for sharing.

```js
git clone --bare <repo> <repo>.git
```

To add the bare repository as a remote to our original repository.

```js
git remote add shared ../repo.git
```

## Git Stash

The `git stash` command takes your uncommitted changes (both staged and unstaged), saves them away for later use, and then reverts them from your working copy.

```js
git stash
```

*Popping* your stash removes the changes from your stash and reapplies them to your working copy.

```js
git stash pop
```

Alternatively, you can reapply the changes to your working copy *and* keep them in your stash with 

```js
git stash apply
```

## Alias

```js
gst='git status'
gl='git pull'
gp='git push'
gd='git diff | mate'
gau='git add --update'
gc='git commit -v'
gca='git commit -v -a'
gb='git branch'
gba='git branch -a'
gco='git checkout'
gcob='git checkout -b'
gcot='git checkout -t'
gcotb='git checkout --track -b'
glog='git log'
glogp='git log --pretty=format:"%h %s" --graph'
```

# SYMLINKS

```css
Ander ja k awaj marni ji
ln -s ../../notes ./
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5NjM5NTEyNTldfQ==
-->