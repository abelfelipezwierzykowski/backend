'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 🔧 Altera a coluna para ter autoIncrement
    await queryInterface.changeColumn('Barbeiros', 'id_barbeiro', {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // 👈 aqui está o segredo
    });

    // Remove constraint FK se já existir
    await queryInterface.removeConstraint('Barbeiros', 'fk_barbeiro_usuario').catch(() => {});

    // Remove UNIQUE se já existir
    await queryInterface.removeConstraint('Barbeiros', 'unique_id_barbeiro').catch(() => {});

    // Adiciona FK corrigida
    await queryInterface.addConstraint('Barbeiros', {
      fields: ['id_usuario'],
      type: 'foreign key',
      name: 'fk_barbeiro_usuario',
      references: {
        table: 'Usuarios',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    });

    // Adiciona UNIQUE de id_barbeiro
    await queryInterface.addConstraint('Barbeiros', {
      fields: ['id_barbeiro'],
      type: 'unique',
      name: 'unique_id_barbeiro',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Reverte o autoIncrement
    await queryInterface.changeColumn('Barbeiros', 'id_barbeiro', {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    });

    await queryInterface.removeConstraint('Barbeiros', 'fk_barbeiro_usuario').catch(() => {});
    await queryInterface.removeConstraint('Barbeiros', 'unique_id_barbeiro').catch(() => {});
  },
};
