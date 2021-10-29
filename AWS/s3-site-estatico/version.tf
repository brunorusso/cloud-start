terraform {
  required_version = ">=1.0.9"
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 2.0"
    }
  }
}

provider "aws" {
	region = "sa-east-1"
  	shared_credentials_file = "~/.aws/credentials"
}
