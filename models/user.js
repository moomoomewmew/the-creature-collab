'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Event, {
        as: 'owned',
        foreignKey: 'ownerId'
      });
      User.hasOne(models.City, { foreignKey: 'users' });
      User.belongsToMany(models.Event, {
        as: 'attendee',
        through: models.EventUser,
        foreignKey: 'attendeeId'
      });
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      characterName: DataTypes.STRING,
      city: DataTypes.STRING,
      characterClass: DataTypes.STRING,
      race: DataTypes.STRING,
      moralAlignment: DataTypes.STRING,
      bio: DataTypes.STRING,
      profilePic: DataTypes.STRING,
      passwordDigest: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  );
  return User;
};
