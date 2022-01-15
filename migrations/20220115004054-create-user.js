'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING
      },
      characterName: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      characterClass: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      moralAlignment: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      profilePic: {
        type: Sequelize.STRING
      },
      passwordDigest: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
