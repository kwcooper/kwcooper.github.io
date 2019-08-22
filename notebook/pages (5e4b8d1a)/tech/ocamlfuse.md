Ocamlfuse for google drive
=======

here isn't a native google drive desktop app for linux. [Ocamlfuse for google drive](https://github.com/astrada/google-drive-ocamlfuse) allows a sync-able folder (treated as an attached drive)

Install
---------
`sudo add-apt-repository ppa:alessandro-strada/ppa`
`sudo apt-get update`
`sudo apt-get install google-drive-ocamlfuse`

&nbsp;

run with `google-drive-ocamlfuse`

the browser will then open; add your account
wait for the access token
once added, make a new directory for the files
`mkdir ~/<folder_name>`

&nbsp;
mount the folder
`google-drive-ocamlfuse ~/<folder_name>`

&nbsp;
to add another account, make a new directory then run:
`google-drive-ocamlfuse -label label ~/<new_folder_name>`

&nbsp;
and then run through the steps again


...
---------

To dismount a drive use 
`fusermount -u [mountPoint or foldername]`
...


init 190312
ud   190312