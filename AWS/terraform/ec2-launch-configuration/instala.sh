#!/bin/bash
yum update -y
yum install -y httpd httpd-tools mod_ssl 
systemctl enable httpd
systemctl start httpd 
echo "<html>Teste</html>" > /var/www/html/index.html
