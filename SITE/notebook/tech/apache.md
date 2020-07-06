Apache Server Quickstart
=======

Build it:
---------

Easily download the apache server
[This](https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-18-04-quickstart) link and [This](https://www.tecmint.com/install-apache-web-server-on-ubuntu-18-04/) link are helpful. Primarily just an `sudo apt install apache2`, but some conditions may apply 

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

Any errors? Be sure to check the logs at `/var/log/apache2`



Useful commands:
---------

`sudo systemctl status apache2`

`sudo systemctl stop apache2`

`sudo systemctl start apache2`



Protections:
---------
To password protect the new server, a super simple way is to use a .htaccess file. For more info read [this](https://www.linode.com/docs/web-servers/apache/how-to-set-up-htaccess-on-apache/).

1. change the apache config to allow overide in the config at `/etc/apache2/apache2.conf` by:
`AllowOverride All`
Then restart apache

2. add your .htaccess files to the directory of choice. Configure appropriatly. 
Things to remember: 
a. Use the full path to the .htpasswd file. 
b. the .htpasswd file password needs to be a hash, not plaintext... 
[This](http://www.htaccesstools.com/htpasswd-generator/) is a handy site for generating these hashes. 

Also note ths is a quick solution, but by far not the best one. This method will impact the performance of your site and also not the most secure. 



Python and wsgi
---------
1. Grab the package: `sudo apt-get install libapache2-mod-wsgi -y`
2. Create the page constructor function, a .py file, in a directory, ie. `sudo nano /var/www/html/buildPage.py`. Assign permissions. 
3. create `sudo nano /etc/apache2/conf-available/wsgi.conf` and add `WSGIScriptAlias /wsgi /var/www/html/wsgy.py`.  `/wsgi` can be anything and will be the served directory in the url. the second argument points to the constructor function. 
4. reload apache

Some useful notes [here](https://www.howtoforge.com/tutorial/how-to-run-python-scripts-with-apache-and-mod_wsgi-on-ubuntu-18-04/)

--
init 190218
ud   190831









