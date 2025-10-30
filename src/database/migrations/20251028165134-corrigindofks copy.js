'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 🔧 Remove a coluna e recria com autoIncrement
    await queryInterface.removeColumn('Barbeiros', 'id_barbeiro');

    await queryInterface.addColumn('Barbeiros', 'id_barbeiro', {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    });

    // Recria as constraints
    await queryInterface.removeConstraint('Barbeiros', 'fk_barbeiro_usuario').catch(() => {});
    await queryInterface.removeConstraint('Barbeiros', 'unique_id_barbeiro').catch(() => {});

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

    await queryInterface.addConstraint('Barbeiros', {
      fields: ['id_barbeiro'],
      type: 'unique',
      name: 'unique_id_barbeiro',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Barbeiros', 'id_barbeiro');
    await queryInterface.addColumn('Barbeiros', 'id_barbeiro', {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    });

    await queryInterface.removeConstraint('Barbeiros', 'fk_barbeiro_usuario').catch(() => {});
    await queryInterface.removeConstraint('Barbeiros', 'unique_id_barbeiro').catch(() => {});
  },
};
