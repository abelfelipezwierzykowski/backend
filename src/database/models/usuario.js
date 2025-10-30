'use strict';
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs'); // importa o bcrypt
require('dotenv').config(); // para ler o SALT_ROUNDS do .env

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasOne(models.Barbeiro,{
        foreignKey:'id_usuario',
        as:'barbeiro'
      })
    }

    // Função auxiliar para comparar senhas
    async validarSenha(senhaDigitada) {
      return await bcrypt.compare(senhaDigitada, this.senha);
    }
  }

  Usuario.init({
    nome_usuario:
    DataTypes.STRING,
    
    senha: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: { isEmail: true }
    },
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuarios',
  });

 
  Usuario.beforeCreate(async (usuario, options) => {
    const saltRounds = parseInt(process.env.SALT_ROUNDS, 10) || 10;
    if (usuario.senha) {
      usuario.senha = await bcrypt.hash(usuario.senha, saltRounds);
    }
  });


  Usuario.beforeUpdate(async (usuario, options) => {
    const saltRounds = parseInt(process.env.SALT_ROUNDS, 10) || 10;
    if (usuario.changed('senha')) {
      usuario.senha = await bcrypt.hash(usuario.senha, saltRounds);
    }
  });

  return Usuario;
};
