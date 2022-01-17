'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Event, {

        as: 'eventsOwned',
        foreignKey: 'ownerId'
      });
      User.belongsToMany(models.Event, {
        as: 'eventsAttending',
        through: models.EventUser,
        foreignKey: 'attendeeId'
      });
    }
  }
  User.init(
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      characterName: DataTypes.STRING,
      city: DataTypes.STRING,
      pronouns: DataTypes.STRING,
      characterClass: DataTypes.STRING,
      race: DataTypes.STRING,
      moralAlignment: DataTypes.STRING,
      bio: DataTypes.STRING,
      profilePic: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  );
  return User;
};
