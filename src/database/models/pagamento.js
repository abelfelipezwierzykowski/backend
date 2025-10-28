'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pagamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pagamento.init({
    id_pedido: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER,
    data_pagamento: DataTypes.DATE,
    valor_pago: DataTypes.INTEGER,
    forma_pagamento: DataTypes.STRING,
    status_pagamento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pagamento',
  });
  return Pagamento;
};