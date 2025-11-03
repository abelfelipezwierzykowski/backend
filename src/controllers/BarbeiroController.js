
const db = require('../database/models');
const Barbeiro = db.Barbeiro;


class BarbeiroController {

  static async listarBarbeiros(req, res, next) {
    try {
      const listaBarbeiros = await Barbeiro.findAll();
      res.status(200).json(listaBarbeiros);
    } catch (erro) {
      next(erro);
    }
  }


  static async listarPeloId(req, res, next) {
    const { id } = req.params;
    try {
      const barbeiro = await Barbeiro.findByPk(id);
      if (!barbeiro) {
        return res.status(404).json({ erro: 'Barbeiro não encontrado' });
      }
      res.status(200).json(barbeiro);
    } catch (erro) {
      next(erro);
    }
  }


  static async cadastrarBarbeiro(req, res, next) {
    try {
      const { id_usuario ,id_barbeiro } = req.body;
      const novoBarbeiro = await Barbeiro.create({ id_usuario, id_barbeiro });
      res.status(201).json({
        mensagem: "Barbeiro cadastrado com sucesso!",
        Barbeiro: novoBarbeiro,
      });
    } catch (erro) {
      next(erro);
    }
  }

 
  static async atualizarBarbeiro(req, res, next) {
    try {
      const { id } = req.params;
      const barbeiro = await Barbeiro.findByPk(id);
      if (!barbeiro) {
        return res.status(404).json({ erro: "Barbeiro não encontrado" });
      }
      await barbeiro.update(req.body);
      res.status(200).json({ mensagem: "Barbeiro atualizado com sucesso!", barbeiro });
    } catch (erro) {
      next(erro);
    }
  }

  static async deletarBarbeiro(req, res, next) {
    try {
      const { id } = req.params;
      const barbeiro = await Barbeiro.findByPk(id);
      if (!barbeiro) {
        return res.status(404).json({ erro: "Barbeiro não encontrado" });
      }
      await barbeiro.destroy();
      res.status(200).json({ mensagem: "Barbeiro removido com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  }

}

module.exports = BarbeiroController;
