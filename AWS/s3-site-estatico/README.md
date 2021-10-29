# Site estático em um Bucket S3

## O que esse exemplode código faz?
Cria um bucket S3, e configura-o para hospedar um site estático. Além disso, aplica uma policy garantindo a segurança do bucket público.

**Atenção**: Permissões de leitura pública são necessárias para a configuração de buckets para hospedagem de sites.

## Como usar?
1-) No arquivo variables.tf, defina o nome do bucket na variável **bucket_name**
2-) Execute o código em terraform

