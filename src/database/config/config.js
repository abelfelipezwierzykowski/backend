require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: process.env.CONECT_PASSWORD,
    database: 'trabalho_oficial',
    host: 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: process.env.CONECT_PASSWORD,
    database: 'trabalho_oficial',
    host: 'localhost',
    dialect: 'postgres'
  },
  production: {
    username: 'postgres',
    password: process.env.CONECT_PASSWORD,
    database: 'trabalho_oficial',
    host: 'localhost',
    dialect: 'postgres'
  }
};

