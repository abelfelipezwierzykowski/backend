'use strict';
const {Model,DataTypes} = require('sequelize');
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    nome_usuario: DataTypes.STRING,
    senha: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuarios', 
  });
  return Usuario;
};