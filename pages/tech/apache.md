Apache Server Quickstart
=======

Build it:
---------

Easily download the apache server
[This](https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-18-04-quickstart) link and [This](https://www.tecmint.com/install-apache-web-server-on-ubuntu-18-04/) link are helpful. Primarily just an `apt get install apache2`, but some conditions may apply 

Test if it works with your local ip. You should see the landing page. 

Now grab php to do most interesting things.
Make sure that it is installed, else, go [here](https://thishosting.rocks/install-php-on-ubuntu/)

`<?php
phpinfo();
?>`

save the code as a php file and try to run it. 


Playtime
---------

Find the HTML at `/var/www/html` Go nuts. Required sudo. 

Useful commands:

`sudo systemctl status apache2`

`sudo systemctl stop apache2`

`sudo systemctl start apache2`


init 190218
ud   190219









