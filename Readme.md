# NodeJs_Challenge_20201030

Este foi o test ou desafio que me foi proposto pela  plataforma *Coodesh* para a vaga de Node developer na empresa *Talent Academy* a fim de testar as minhas competências como desenvolvedor na tecnologia `NodeJs`.

O teste consiste no desenvolvimento de uma REST API para utilizar os dados do projeto Open Food Facts.

Recursos disponíveis para acesso via API ou endpoints(URI):

- *baseURL* - http://localhost:3333/v1/
- *products* - /products

| Método | Descrição                         |
| ------ | --------------------------------- |
| `POST` | `/products`                        |
| `GET`  | `/products/:id` e `/products` |

um exemplo do funcionamento das rotas.

## Dependencias | Instalando o proejcto

# Normal

- Rode um yarn | npm install para baixar todas as dependências

# Via DOCKER

1. `docker-compose build/sudo docker-compose build` - no windows/Linux
2. `docker-compose up -d/sudo docker-compose up -d` - Para rodar a o container em backGround
3. `docker-compose up/docker-compose up` - Para rodar a aplicação também
4. Rode um `docker ps/sudo docker ps` - Para verificar se os containers estão rodando

Para rodar a aplicação siga os seguintes passos:
Primeiro: Crie as variáveis de ambiente `.env`, `.env.example` e `.env.development` e dentro delas configure as seguintes variáveis:

- POSTGRES_HOST=localhost
- POSTGRES_PORT=5432
- POSTGRES_USER=
- POSTGRES_PASSWORD=
- POSTGRES_DATABASE=NodeJs_Challenge

OBS: Atualize o user e password de acordo aos dados da sua máquina

Segundo: crie uma base de dados com o nome `NodeJs_Challenge`

- Nesse Passo certifique-se | ou rode o comando
  `CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;`
  Actualize as configurações da base de dados, colocando o `user`, `password`, `host`
- Ou pode simplesmente continuar usando banco de dados em cloud hospedado em `https://api.elephantsql.com/`
- Cujo os dados de acesso estão localizado em `.env.development`

nodeJs - ormconfig.js
  module.exports = [
  {
    name: "default",
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: false,
    logging: false,
    entities: ["**/models/**/*.ts"],
    migrations: ["src/database/migration/**/*.ts"],
    subscribers: ["src/database/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/models",
      migrationsDir: "src/database/migration",
      subscribersDir: "src/database/subscriber",
    },
  },
}


Após isso, rode as migrations de formas a criar as tabelas na base de dados

shell
  yarn typeorm migration:run || npm run typeorm migratiom:run



## Métodos

Requisições para a API devem seguir os padrões:
| Método | Descrição |
| -------- | ----------------------------------------------------- |
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |

## Rode o Projeto

- Para executar, basta:

| Comando                       | Descrição                      |
| ----------------------------- | ------------------------------ |
| `yarn test` ou `npm run test` | Rodando os testes da Aplicação |
| `yarn dev` ou `npm run dev`   | Rodando a aplicação em geral   |
| `yarn test`                   | Rodando os testes da Aplicação |

## Respostas

| Código | Descrição                                                          |
| ------ | ------------------------------------------------------------------ |
| `200`  | Requisição executada com sucesso (success).                        |
| `201`  | Registro Criado com sucesso.                                       |
| `400`  | Erros de validação ou os campos informados não existem no sistema. |
| `500`  | Erro interno do servidor.                                          |



## Tecnologias/Ferramentas Usadas

- NodeJs
- TypeScript
- PostgreSQL
- PSQL in shell mode
- ExpressJs
- typeorm
- Docker
- Docker Compose
- Lint
- Prettier
- Insomnia
- Elephantsql
- Babel

<hr>

<h4>Desenvolvido por: <strong style="color: #1f6feb; align: center">Anderson Francisco</strong></h4>