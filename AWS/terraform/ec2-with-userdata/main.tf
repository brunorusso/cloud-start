resource "aws_instance" "web_server" {
  ami           = "ami-05855ed85de7fbd77"
  instance_type = "t2.nano"
}


# output "url_site" {
#  value = aws_s3_bucket.site_estatico.bucket_regional_domain_name
#  description = "URL para acessar o bucket"
#}

