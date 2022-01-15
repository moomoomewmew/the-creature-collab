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
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      characterName: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      pronouns: {
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
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: {
        type: Sequelize.STRING,
        allowNull: false
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
