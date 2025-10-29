const express = require('express');
const cors = require('cors');
const routesUsuario = require('./routes/routesUsuario.js');
const authRoutes = require('./routes/authRoute.js');
const manipulador404 = require('./database/Error/Manipulador404.js');
const ManipuladorDeErros = require('./midleware/ManipuladorDeErros.js');


// Inicializa o app
const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'], // permite front-end e outras origens
  credentials: true,                // permite envio de cookies/autenticação se necessário
  methods:['GET', 'POST', 'PUT', 'DELETE'] // métodos permitidos
}));


app.use(express.json());

// Rotas principais
app.use(routesUsuario);
app.use('/usuarios', routesUsuario);
app.use('/auth', authRoutes);

app.use(ManipuladorDeErros);

// Middleware para rotas não encontradas (404)
app.use(manipulador404);

module.exports = app;
