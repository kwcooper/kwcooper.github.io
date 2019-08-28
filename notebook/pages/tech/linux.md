Linux OS
=======

Filesystem Overview 
---------

|||
|-|-|
| bin (sbin) | binaries - basic linux functions |
| boot | bootloaders (be careful) |
| dev | devices - all harware, disks, etc |
| etc | et cetera - all systemwide config's, i.e. apt |
| home | store personal files and docs |
| lib/lib32/lib64 | libraries |
| mnt/media | mount - where the stoage devices are (use mnt for manual) |
| opt | optional - vendor software, or your own software |
| proc | processes - process info |
| root | root - home for root |
| run | filesystem in RAM |
| snap | I still don't know if I like these |
| srv | server - for server files |
| sys | system - a way to write to the kernel, not written to disk |
| tmp | temp - saves files for backup or temporary use, may want to clean up every now and then |
| usr | user - where user software application folders are stored |   
| var | variable - contains files that could grow in size, i.e logs, databases etc. |


useful commands
---------

|||
|-|-|
| `whereis` | grab the path to the package |
| `df -l` | show diskspace |
| `sudo fdisk -l` | list disk devices |


profiles info
---------

good forum [here](https://serverfault.com/questions/261802/what-are-the-functional-differences-between-profile-bash-profile-and-bashrc)
the man pages also explains further. 

|||
|-|-|
|.profile | used for non-bash specific info. i.e. variables, path, etc. This is done once per session. |
| .bashrc | config for bash useage. i.e. aliases, editor, prompt |
| .bash_profile | used for login shells, mostly to load .profile and .bashrc.  |
|.bash_aliases| separate file for aliases, sourced from bashrc |
 

motd
---------
Info displayed at system login
great article [here](https://devtidbits.com/2015/11/30/add-to-and-change-ubuntus-motd/)

to run it `sudo run-parts /etc/update-motd.d`



mount a usb disk
---------

from [here](https://askubuntu.com/questions/285539/detect-and-mount-devices)
`sudo mkdir /media/usbstick`
`sudo mount -t vfat /dev/sdb1 /media/usbstick`

make sure to check the usb name, type etc...


Useful Programs
---------

|||
|-|-|
| neofetch | show system stats |
| oneko | ... |


fun
---------
for weather info via terminal...
`curl wttr.in` or `wttr.in/Irvine?format=%t`


init 190801
ud 190812