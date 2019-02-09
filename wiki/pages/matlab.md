MATLAB
=======

How to run Matlab from the command line
---------

From this stack overflow [post](https://stackoverflow.com/questions/6657005/matlab-running-an-m-file-from-command-line)

In Unix: 
1. Find where your binary files are stored with `fullfile(matlabroot, 'bin’)` in Matlab


2. Export that path in OS X terminal: `export PATH=$PATH:/Applications/MATLAB_R2017a.app/bin`


3. The Matlab command should open the gui. Use  `matlab -nodesktop`



Ref: Mathwork’s help [forum](https://www.mathworks.com/matlabcentral/answers/16407-can-i-use-matlab-from-the-terminal-command-line-in-os-x)

Or 

`export PATH=/Applications/MATLAB_R2017b.app/bin/:$PATH`


Section 2
---------
[...]
