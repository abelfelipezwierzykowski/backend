const express = require('express');
const routes = require('./routes/routesUsuario.js');
const manipulador404 = require('./database/Error/Manipulador404.js');
const ManipuladorDeErros = require('./midleware/ManipuladorDeErros.js');
const cors = require('cors');

// Inicializa o app
const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'], // permite front-end e outras origens
  credentials: true,                // permite envio de cookies/autenticação se necessário
  methods:'POST'// métodos permitidos
}));


app.use(express.json());

// Rotas principais
app.use(routes);

// Middleware para rotas não encontradas (404)
app.use(manipulador404);

// Middleware global de tratamento de erros
app.use(ManipuladorDeErros);

module.exports = app;
