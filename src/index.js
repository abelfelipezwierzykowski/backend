const express = require('express');
const routes = require('./routes/routesUsuario.js');
const manipulador404 = require('./Error/Manipulador404.js');
const ManipuladorDeErros = require('./midleware/ManipuladorDeErros.js');

// Inicializa o app
const app = express();

app.use(express.json());

// Rotas principais
app.use(routes);

// Middleware para rotas não encontradas (404)
app.use(manipulador404);

// Middleware global de tratamento de erros
app.use(ManipuladorDeErros);

module.exports = app;
