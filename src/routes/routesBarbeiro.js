const express = require('express');
const router = express.Router();
const BarbeiroController = require('../controllers/BarbeiroController.js');



router.get("/", BarbeiroController.listarBarbeiros);
router.get("/:id", BarbeiroController.listarPeloId);
router.post("", BarbeiroController.cadastrarBarbeiro);
router.put("/:id", BarbeiroController.atualizarBarbeiro);
router.delete("/:id", BarbeiroController.deletarBarbeiro);




module.exports = router;
