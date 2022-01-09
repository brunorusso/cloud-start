# Imports
import boto3
import json

# Variables
dynamodb = boto3.resource("dynamodb")
tablename = dynamodb.Table('Clientes')


def lambda_handler(event, context):
    try:
        data = json.dumps(event)
        valor = event['queryStringParameters']
        
        nome_cliente = valor["name"]
        response = tablename.put_item(Item={'Nome': nome_cliente})
    except Exception as e:
        return {
            'statusCode': 400,
            'body': json.dumps('Erro ao gravar dados')
        }
    return {
        'statusCode': 200,
        'body': json.dumps('Dados gravados com Sucesso')
    }
