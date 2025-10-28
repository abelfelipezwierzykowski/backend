'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarrinhoDeCompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CarrinhoDeCompra.init({
    id_cliente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CarrinhoDeCompra',
  });
  return CarrinhoDeCompra;
};