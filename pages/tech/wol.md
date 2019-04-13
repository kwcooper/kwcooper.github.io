Wake on Lan
=======

With Ubuntu 18.04
---------
command to view if ethernet wol is turned on:
`sudo ethtool <internet adaptor; -> enp2s0>` 

look for 'g' not 'd' at the wake-on line

if 'd', enable it:
`sudo ethtool -s enp2s0 wol g`

Problem: wol was disabled after each boot
Maybe a start up script in the bash upstart files
possibly [fixable](https://serverfault.com/questions/463111/how-to-persist-ethtool-settings-through-reboot)



Section 2
---------

[...]


init 190312
ud   190312