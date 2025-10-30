'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barbeiro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Barbeiro.belongsTo(models.Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuario'
  });
    }
  }
  Barbeiro.init({
    id_barbeiro:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true
    }, 

    id_usuario:{
    type: DataTypes.INTEGER,
    allowNull: false
  }, 
  }, {
    sequelize,
    modelName: 'Barbeiro',
  });
  return Barbeiro;
};