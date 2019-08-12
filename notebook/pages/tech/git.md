GIT
=======

Notes on git
---------
Primarily taken from [this](http://rogerdudler.github.io/git-guide/) wonderful site 


Init git and repo
---------
`git config --global user.email "you@example.com"
 git config --global user.name "Your Name"`

`git init`
further [reading](https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line)


Add and Commit
---------
1. `git add <filename>` or `git add *` or `git add .`
2. `git commit -m "Commit message"`


Pushing Changes
---------
1. `git push origin master`


Status
---------
Check for conflicts and what's going on... 
1. `git status`


Call git in a bash function? 
---------
Memorizing is hard. Automating is easy. Call multiple git commands at once:
(see my sys profiles [here](https://github.com/kwcooper/sysConfig) )

```bash
# Git Add Commit bash function
gac () { 
	echo "Adding and commiting..."
    git add * 
    git commit -am "$*"
    #git push origin master
}
```

Call with `gac "ud"`  



Conflicting process errors?
---------
`rm -f .git/index.lock`


Save username and password (Buggy)
---------
Can save them to a temp file
`git config credential.helper store` and `git pull`
to change the timing to an hour:
`git config --global credential.helper 'cache --timeout=3600'`

I set up a few other git alias's [here](github.com)



init 190109
ud   190808