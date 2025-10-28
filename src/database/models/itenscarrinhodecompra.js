'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItensCarrinhoDeCompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ItensCarrinhoDeCompra.init({
    id_usuario: DataTypes.INTEGER,
    id_carrinho: DataTypes.INTEGER,
    id_produto: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItensCarrinhoDeCompra',
  });
  return ItensCarrinhoDeCompra;
};