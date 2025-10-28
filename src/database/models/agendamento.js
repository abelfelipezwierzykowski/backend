'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agendamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Agendamento.init({
    id_cliente: DataTypes.INTEGER,
    id_barbeiro: DataTypes.INTEGER,
    id_servico: DataTypes.INTEGER,
    data: DataTypes.DATE,
    hora: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Agendamento',
  });
  return Agendamento;
};