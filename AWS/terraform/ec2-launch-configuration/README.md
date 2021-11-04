# Launch EC2 with Auto Scalling

## O que esse exemplo de código faz?
1. Cria um IAM role para ser usado pela EC2
2. Cria um launch configuration, para deploy de uma EC2 baseada na imagem Amazon Linux e instala o Apache
3. Cria um Autoscalling Group 

## Como usar?

1-) No arquivo variables.tf, defina o nome do bucket na variável **bucket_name**

2-) Execute o código em terraform

