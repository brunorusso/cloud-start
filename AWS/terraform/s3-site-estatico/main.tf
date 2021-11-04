resource "aws_s3_bucket" "site_estatico" {
  bucket = var.bucket_name
  acl    = "public-read"
  website {
    index_document = "index.html"
    error_document = "error.html"

  }
}

resource "aws_s3_bucket_policy" "site_estatico" {
  bucket = aws_s3_bucket.site_estatico.id
  policy = jsonencode({
    "Version": "2012-10-17",
    "Id": "MyPolicy",
    "Statement": [
      {
        "Sid": "PublicReadForGetBucketObjects",
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::${var.bucket_name}/*"
      },
    ]
  })
}

output "url_site" {
  value = aws_s3_bucket.site_estatico.bucket_regional_domain_name
  description = "URL para acessar o bucket"
}

