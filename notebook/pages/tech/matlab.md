MATLAB
=======

How to run Matlab from the command line
---------

In Unix: 
1. Find where your binary files are stored with `fullfile(matlabroot, 'bin')` in Matlab
2. Export that path in OS X terminal: `export PATH=$PATH:/Applications/MATLAB_R2017a.app/bin` 
3. The Matlab command should open the gui. Use  `matlab -nodesktop` 


Refs: 
Mathwork’s help [forum](https://www.mathworks.com/matlabcentral/answers/16407-can-i-use-matlab-from-the-terminal-command-line-in-os-x)
inspired from this stack overflow [post](https://stackoverflow.com/questions/6657005/matlab-running-an-m-file-from-command-line)

Or 

`export PATH=/Applications/MATLAB_R2017b.app/bin/:$PATH`


Matlab Linux install
---------
Pretty straightforward, but a bit more fenagaling. 
A great reference is [this](https://linuxconfig.org/how-to-install-matlab-on-ubuntu-18-04-bionic-beaver-linux) guide

1. Download and unzip the downloaded matlab file
2. Run the install file in the unziped matlab directory
3. Click through the matlab prompts; install. (Note that the default instal directory doesn't conform with ubuntu schemes, should be in /opt but this is more of a hassel due to permissions.)
4. Can manually create a shortcut to launch it once installed, or can download a ubuntu package from apt that will add functionality as if it was a deb package. 


--
init 190219
ud   190829