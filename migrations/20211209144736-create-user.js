'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM(['pending', 'active', 'blocked']),
        allowNull: false,
        defaultValue: 'pending'
      },
      role_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'Roles',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      age: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      dob: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};