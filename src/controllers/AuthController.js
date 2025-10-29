const db = require('../database/models');
const jwt = require('jsonwebtoken'); // 🔸 importa o JWT
const Usuario = db.Usuario;

const SECRET = process.env.JWT_SECRET || "chaveSuperSecreta"; // 🔒 ideal usar variável de ambiente

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

      // 🔹 Gera o token JWT
      const token = jwt.sign(
        {
          id: usuario.id,
          nome: usuario.nome_usuario,
          email: usuario.email
        },
        SECRET,
        { expiresIn: '1h' } // token expira em 1 hora
      );

      // 🔹 Retorna o token junto com os dados do usuário
      res.status(200).json({
        mensagem: 'Login realizado com sucesso!',
        token,
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
