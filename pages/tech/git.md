GIT
=======

Notes on git
---------
Primarily taken from [this](http://rogerdudler.github.io/git-guide/) wonderful site 


Add and Commit
---------
1. `git add <filename>` or `git add *`
2. `git commit -m "Commit message"`


Pushing Changes
---------
1. `git push origin master`


Call git in a bash function? 
---------
Memorizing is hard. Automating is easy. Call multiple git commands at once:

```bash
# Git Add Commit bash function
gac () {
   git add *
   git commit -m "$1"
}
```

Call with `gac "ud"`  



Conflicting process errors?
---------
`rm -f .git/index.lock`


Init repo
---------
`git init`
further [reading](https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line)


I set up a few other git alias's [here](github.com)



init 190109
Ud   190805