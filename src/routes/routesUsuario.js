const express = require('express');
const UsuarioController = require('../controllers/usuariocontroller.js');
const routes = express.Router();

routes.get("/usuarios", UsuarioController.listarUsuarios);
routes.get("/usuarios/:id", UsuarioController.listarPeloId);
routes.post("/usuarios", UsuarioController.cadastrarUsuario);
routes.put("/usuarios/:id", UsuarioController.atualizarUsuario);
routes.delete("/usuarios/:id", UsuarioController.deletarUsuario);

module.exports = routes;
