Wake on Lan
=======

With Ubuntu 18.04 
---------
command to view if ethernet wol is turned on:
`sudo ethtool <internet adaptor, i.e. enp2s0>` 

look for 'g' not 'd' at the wake-on line

if 'd', enable it:
`sudo ethtool -s enp2s0 wol g`

Problem: wol was disabled after each boot
Maybe a start up script in the bash upstart files
possibly [fixable](https://serverfault.com/questions/463111/how-to-persist-ethtool-settings-through-reboot)

now we can use the `wakeonlan <computer_name>` command 


Live testing
---------

A useful way to test the magic packet was sent (on unix systems):
Run `nc -ul -p 9`
Then send the packet and wait...


Mobile & Remote
---------
I like to use andriod WOL apps as well as tasker to run the commands. 
Reminder - I have an added bit of security added I won't post openly...

init 190312
ud   190806