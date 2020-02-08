Python
=======

Cool Commands
---------

The best command
Will run the file in terminal similar to IDLE
TODO: port this directly to sublime in some crazy way...
`exec(open("filename.py").read())`
Similarly, you can run python in an interactive shell, simply by calling:
`python -i filename.py`


To find python path information
`for p in sys.path:
    print(p)`

To find information on a packages path
`import os`
`import a_module`
`print(a_module.__file__)`
`path = os.path.dirname(a_module.__file__)`


Run internal python tests
`python -m test`


To find where the package is
`pip show <package_name>` 



Good Packages
---------
Store passwords with keyring
[alex chan's blog post on it](https://alexwlchan.net/2016/11/you-should-use-keyring/)



pyenv
---------
Use this to manage multiple versions of python. I stopped using after the macOS calillina upgrade...

check for packages to be installed
`pyenv install --list`

install packages with 
`pyenv install 3.7.3` (optional -v for verbose)

List the installed versions
`ls ~/.pyenv/versions/` or `pyenv versions`

Remove a version
`rm -rf ~/.pyenv/versions/2.7.15` or `pyenv uninstall 2.7.15`

Show full path to the system exe
`pyenv which <name>`

Set global version
`pyenv global <version>`

Set project specific version:
`pyenv local <version>`

...And for the shell
`pyenv shell <version>` 

Create a virtual env 
`pyenv virtualenv <python_version> <environment_name>`

Activate it 
`pyenv local <envirement_name>`

deactivate it
`pyenv deactivate`


Useful links
---------

[Guide](https://the-hitchhikers-guide-to-packaging.readthedocs.io/en/latest/creation.html) to creating a python package from PyPi
Use [this](https://medium.com/@briantorresgil/definitive-guide-to-python-on-mac-osx-65acd8d969d0) solid guide for python on macOS


init 190122
ud   191229