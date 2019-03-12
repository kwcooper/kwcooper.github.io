Bash
=======

bash profile info
---------

_terminology:_
interactive login shell:               You log into ssh. 

interactive non-login shell:           Open a new terminal.

non-interactive non-login shell:       Run a script. 

&nbsp;

|||
|-|-|
|`~/.bash_profile`    |   is only sourced by bash when started in interactive login mode. should source `~/.bashrc` |
|`~/.bashrc`  |           when a new terminal is opened (non-login interactive)|
|`~/.profile`            | during graphical login, will be specifically sourced by the script that launches gnome-session |
|`~/.bash_aliases`     |  new addition, sourced by .bashrc for organization. |


&nbsp;
check if in a login shell with: (off means non-login) 
`shopt login_shell`

&nbsp;
_from `man bash`_

|||
|-|-|
|`bin/bash`     |       The bash executable|
|`/etc/profile`   |     The systemwide initialization file, executed for login shells |
| `~/.bash_profile`   |  The personal initialization file, executed for login shells |
| `~/.bashrc`  |         The individual per-interactive-shell startup file|
| `~/.bash_logout`  |    The individual login shell cleanup file, executed when a login shell exits |
| `~/.inputrc`     |     Individual readline initialization file |


...
---------

[...]


init 190312
ud   190312











