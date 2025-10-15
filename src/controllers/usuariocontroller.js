const { ValidationError, UniqueConstraintError } = require('sequelize');
const db = require('../database/models');
const Usuario = db.Usuario;
// eslint-disable-next-line no-unused-vars
const { Op } = require('sequelize');


class Usuariocontroller {

  // Listar todos os usuários
  static async listarUsuarios(req, res, next) {
    try {



      const listaUsuarios = await Usuario.findAll({});
      res.status(200).json(listaUsuarios);
    } catch (erro) {
      next(erro);
    }
  }

  // Listar usuário pelo ID
  static async listarPeloId(req, res, next) {
    const { id } = req.params;
    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
      }
      res.status(200).json(usuario);
    } catch (erro) {
      next(erro);
    }
  }

  // Cadastrar novo usuário
  static async cadastrarUsuario(req, res, next) {
    try {
      const { nome_usuario, email, senha, telefone } = req.body;

      const novoUsuario = await Usuario.create({ nome_usuario, email, senha, telefone });

      res.status(201).json({
        mensagem: "Usuário cadastrado com sucesso!",
        usuario: novoUsuario,
      });

    } catch (erro) {
      if (erro instanceof UniqueConstraintError) {
        return res.status(400).json({ message: "Este email já pertence a um usuário" });
      }
      if (erro instanceof ValidationError) {
        const mensagensErro = erro.errors.map(e => e.message).join("; ");
        return res.status(400).json({ message: `Os seguintes erros foram encontrados: ${mensagensErro}` });
      }
      next(erro);
    }
  }

  // Atualizar usuário
  static async atualizarUsuario(req, res, next) {
    try {
      const { id } = req.params;
      const { nome_usuario, email, senha, telefone } = req.body;

      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
      }

      await usuario.update({
        nome: nome || usuario.nome,
        email: email || usuario.email,
        senha: senha || usuario.senha,
        telefone: telefone || usuario.telefone,
        telefone: telefone || usuario.nome_usuario,
      });

      res.status(200).json({
        mensagem: "Usuário atualizado com sucesso!",
        usuario,
      });

    } catch (erro) {
      if (erro instanceof UniqueConstraintError) {
        return res.status(400).json({ message: "Este email já pertence a um usuário" });
      }
      if (erro instanceof ValidationError) {
        const mensagensErro = erro.errors.map(e => e.message).join("; ");
        return res.status(400).json({ message: `Os seguintes erros foram encontrados: ${mensagensErro}` });
      }
      next(erro);
    }
  }

  // Deletar usuário
  static async deletarUsuario(req, res, next) {
    try {
      const { id } = req.params;

      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
      }

      await usuario.destroy();
      res.status(200).json({ mensagem: "Usuário removido com sucesso!" });

    } catch (erro) {
      next(erro);
    }
  }

  //filtro de busca
//pesquisar sobre filtros de busca e metodos regex


}
module.exports = Usuariocontroller;
