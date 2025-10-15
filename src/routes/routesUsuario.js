const express = require('express');
const Usuariocontroller = require('../controllers/usuariocontroller.js');
const routes = express.Router();

routes.get("/usuarios", Usuariocontroller.listarUsuarios);
routes.get("/usuarios/:id", Usuariocontroller.listarPeloId);
routes.post("/usuarios", Usuariocontroller.cadastrarUsuario);
routes.put("/usuarios/:id", Usuariocontroller.atualizarUsuario);
routes.delete("/usuarios/:id", Usuariocontroller.deletarUsuario);

module.exports = routes;
