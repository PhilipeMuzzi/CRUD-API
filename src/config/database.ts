import { Sequelize } from 'sequelize';


// --------------------------- PostgreSQL---------------------------

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'loja',
  define: {
    timestamps: true,
  },
});

// --------------------------- Para verificar a conexão com o banco de dadoss---------------------------
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // --------------Para sincronizar os modelos com o banco de dados--------------
    sequelize.sync().then(() => {
      console.log('Modelos sincronizados com o banco de dados.');
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

export { sequelize };
