const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuariocontroller.js');
const AuthController = require('../controllers/AuthController.js');
const verificarToken = require('../midleware/verificarToken.js'); // middleware do JWT

// 🔹 ROTAS DE USUÁRIOS (CRUD)
router.get("/usuarios", UsuarioController.listarUsuarios);
router.get("/usuarios/:id", UsuarioController.listarPeloId);
router.post("/usuarios", UsuarioController.cadastrarUsuario);
router.put("/usuarios/:id", UsuarioController.atualizarUsuario);
router.delete("/usuarios/:id", UsuarioController.deletarUsuario);

// 🔹 LOGIN (gera o JWT)
router.post("/auth/login", AuthController.login);

// 🔹 ROTA PROTEGIDA (precisa do token)
router.get("/perfil", verificarToken, (req, res) => {
  res.json({
    message: "Você está autenticado!",
    usuario: req.usuario, // vem do middleware
  });
});

module.exports = router;
