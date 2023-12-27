# Projeto:

Esta API foi desenvolvida utilizando Node.js com Typescript, aproveitando a eficiência do Express para facilitar o desenvolvimento e manutenção do código.

![Print 1](images/print1.PNG)
![Print 2](images/print2.PNG)
![Print 4](images/print3.PNG)


(Todas as informações para rodar o projeto localmente estão disponíveis abaixo:)


## Para a modelagem do banco de dados, foi utilizado o PostgreSQL para:

- id;
- name;
- category;
- status (ACTIVE, INACTIVE);
- quantity;
- created_at;
- updated_at;
- deleted_at;

## Tecnologias Utilizadas:


- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) 
- [PostgreSQL](https://www.postgresql.org/)

## Instalação:

1. Clone ou baixe esse repositório:

- git clone https://github.com/PhilipeMuzzi/loja.git


2. cd loja 


3. npm install


4. Crie seu arquivo .env com suas informações para banco de dados:

DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_user
DB_PASSWORD=password_db
DB_NAME=database_name


5. Use o comando " npx sequelize-cli db:migrate " (sem aspas) para realizar o migrate do banco de dados.


6. npm start


Acesse [http://localhost:3000](http://localhost:3000) para acessar a aplicação via index.html.

Acesse [http://localhost:3000/products](http://localhost:3000/products) para ver a API.

-------------------------------------------------------------------

## Possui:

- API Endpoints

- GET /products

- Get a product by ID:

- GET /products/:id

- Add new product:

- POST /products

- Update a product by ID:

- PUT /products/:id

- Delete a product by ID:

- DELETE /products/:id

--------------------------------------------------------------------


## Desde já, meu muito obrigado !