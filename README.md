# squad-management-server

Servidor para a aplicação Squad-Management

## Instalação e execução

Em primeiro lugar, instale [**Node.js**](https://nodejs.org/en/), [**Yarn**]("https://classic.yarnpkg.com/en/docs/install#debian-stable"), [**typescript**](https://www.npmjs.com/package/typescript), [**nodemon**](https://www.npmjs.com/package/nodemon) e MySQL.

1. Na raiz do repositório, baixe as dependências com **yarn**:
```
yarn
```
2. Renomeie o arquivo *example.env* para *.env*, e edite as variáveis de ambiente. 

3. Rode o script *database.sql* dentro do banco de dados SQL para gerar as tabelas.
```
source database.sql;
```
4. Execute yarn watch no diretório raiz do projeto.
```
yarn watch 
```
5. Após isso, execute yarn dev.
```
yarn dev
```

## Possíveis erros

```
[TYPEORM] Error during database service initialization
```
Provavelmente o arquivo .env não foi preenchido corretamente.

### MySQL
O script foi gerado com base na versão 5.7.31 do MySQL.


# squad-management-app

Aplicação Web 


1. Na raiz do repositório, baixe as dependências com **yarn**:
```
yarn
```

2. Logo em seguida, execute yarn start 
```
yarn start
```

## Testes

![Farmers Market Finder Demo](gifts/addTeam.gif)
![Farmers Market Finder Demo](gifts/editTeam.gif)
![Farmers Market Finder Demo](gifts/sort&Delete.gif)