const db = require('../database/models');
const Usuario = db.Usuario;

class AuthController {
  static async login(req, res) {
    const { email, senha } = req.body;

    try {
      const usuario = await Usuario.findOne({ where: { email } });

      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado' });
      }

      const senhaValida = await usuario.validarSenha(senha);
      if (!senhaValida) {
        return res.status(401).json({ erro: 'Senha incorreta' });
      }

      res.status(200).json({
        mensagem: 'Login realizado com sucesso!',
        usuario: {
          id: usuario.id,
          nome: usuario.nome_usuario,
          email: usuario.email
        }
      });
    } catch (erro) {
      console.error(erro);
      res.status(500).json({ erro: 'Erro ao realizar login' });
    }
  }
}

module.exports = AuthController;
