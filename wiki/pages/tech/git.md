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

`# Git Add Commit bash function
gac () {
   echo "Parameter #1 is $a, $b"
}`

Call with `gac  



Conflicting process errors?
---------
rm -f .git/index.lock



init 190109
UD   190413