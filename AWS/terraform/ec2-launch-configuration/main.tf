##################################################
## SG
##################################################

resource "aws_security_group" "Acesso_web" {
  name        = "Acesso WEB"
  description = "Permite acesso a porta 80"
  vpc_id      = "vpc-48b8a62f"

  ingress = [
    {
      description      = "Acesso WEB"
      from_port        = "80"
      to_port          = "80"
      protocol         = "tcp"
      cidr_blocks      = ["0.0.0.0/0"]
      ipv6_cidr_blocks = ["::/0"]
      prefix_list_ids  = []
      security_groups  = []
      self             = false
    }
  ]

  egress = [
    {
      description      = "Acesso full"
      from_port        = 0
      to_port          = 0
      protocol         = "-1"
      cidr_blocks      = ["0.0.0.0/0"]
      ipv6_cidr_blocks = ["::/0"]
      prefix_list_ids  = []
      security_groups  = []
      self             = false
    }
  ]

  tags = {
    Name = "Acesso_web"
  }
}

############################################
#Instance Profile
############################################

resource "aws_iam_instance_profile" "profile_ec2_web" {
  name = "profile_ec2_web"
  role = aws_iam_role.role.name
}

resource "aws_iam_role" "role" {
  name = "profile_ec2_web"
  path = "/"

  assume_role_policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": "sts:AssumeRole",
            "Principal": {
               "Service": "ec2.amazonaws.com"
            },
            "Effect": "Allow",
            "Sid": ""
        }
    ]
}
EOF
}

############################################
#template
############################################
resource "aws_launch_template" "template_ec2" {
  name = "Servidor-web"
  description = "Servidor WEB de Aplicacao"

  block_device_mappings {
    device_name = "/dev/sda1"

    ebs {
      volume_size = 4
    }
  }

  credit_specification {
    cpu_credits = "standard"
  }

  disable_api_termination = true

  iam_instance_profile {
    name = "profile_ec2_web"
  }
  image_id = "ami-05855ed85de7fbd77"
  instance_initiated_shutdown_behavior = "terminate"
  instance_type = "t2.nano"
  metadata_options {
    http_endpoint               = "enabled"
    http_tokens                 = "required"
    http_put_response_hop_limit = 1
  }

  monitoring {
    enabled = false
  }

  placement {
    availability_zone = "sa-east-1a"
  }

  vpc_security_group_ids = [aws_security_group.Acesso_web.id]

  tag_specifications {
    resource_type = "instance"

    tags = {
      Name = "test"
    }
  }

  user_data = filebase64("instala.sh")
}

# output "url_site" {
#  value = aws_s3_bucket.site_estatico.bucket_regional_domain_name
#  description = "URL para acessar o bucket"
#}
