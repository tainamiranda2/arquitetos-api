## Api para o sistema de serviços para arquitos <a href="https://github.com/tainamiranda2/arquitetoSystem">serviço de arquitetura</a>

## Ao clonar o projeto, escreva o comando npm i para baixar todas as dependencias

### como frameworks para api - express
### body-parser
## banco de dados - postgre
## docker(imagem do postgre),
### comandos docker - docker compose up -d
### prisma(comunicação)
### comandos prisma - npx prisma migrate "nome da tabela"

### prisma - para abir a ferramenta visual e ver seus campos  e tabelas, rode 'npx prisma studio' na sua pasta

### prisma - ao fazer alteração rode o comando 'npx prisma migrate dev --teste'

### prisma - para se conectar ao banco
## comando npm i prisma e npx prisma init

### nodemon
### docker - para criar um docker uma imagem do postgree 
## comando - sudo docker-compose up -d

### bcrypt

## endepoints
### GET/cliente - responsável por listar todos os clientes cadastrados
### POST/cliente- responsável por cadastrar clientes

### GET/arquiteto - responsável por listar todos os arquitetos cadastrados
### POST/arquiteto- responsável por cadastrar arquitetos

### GET/servicos - responsável por listar todos os servicos cadastrados
### POST/servicos- responsável por cadastrar serviços cadastrados por clientes e encaminhando para um arquiteto 
### DELETE/servicos - responsável por deletar os servicos cadastrados
### GET/servicos/id - responsável por listar apenas um dos servicos cadastrados
### PUT/servicos - responsável por atualizar os servicos cadastrados
