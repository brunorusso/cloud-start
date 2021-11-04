# cloud-start
Repositótio com exemplo de uso real de serviços em Cloud Pública.

Você pode estar se perguntando: **Por qual motivo ter um repositório com exemplos se os próprios provedores de nuvem possuem exemplos disponóveis?** __Resposta::__ Pelo simples fato dos códigos utilizados neste exemplos serem mais simples e com um uso prático, onde uma aplicação é criada e disponibilizada.

## Sobre o repositório
- Na branch main estão os códigos 100% funcionais.
- Cada código possui um README, onde estão os detalhes de como utilizar o código.
- Neste momento os exemplos utilizados estão escritos em Terraform e Cloudformation.

## Atenção
Alguns serviços provisionados possuem custo, e a responsabilidade de gerir estes custos é de cada responsável pela sua conta.

## Relação dos repositórios
- [site estático com S3](AWS/terraform/s3-site-estatico)
- [Cria EC2 com User Data](AWS/terraform/ec2-with-userdata)
- [Cria EC2 com Launch Configuration](AWS/terraform/ec2-launch-configuration)
- [Cria VPC + Subnet + Router Table + Internet Gateway + Nat Gateway](AWS/terraform/vpc-subnet-route-tables)

## FAQ
- Os exemplos estão escritos em qual linguagem?

R. Todos os exemplos de infraestrutura como código estão escritos em Terraform.

- Qual provedor de nuvem pública está contemplado nos exemplo:

R. Neste momento, apenas a AWS está contemplada.

- Quem é o responsável por eventuais custos com o provisionamento dos recursos?

R. O responsável pelo provisionamento e/ou responsável pela conta no provedor.
