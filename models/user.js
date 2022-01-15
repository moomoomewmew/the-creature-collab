'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    userName: DataTypes.STRING,
    characterName: DataTypes.STRING,
    city: DataTypes.STRING,
    characterClass: DataTypes.STRING,
    race: DataTypes.STRING,
    moralAlignment: DataTypes.STRING,
    bio: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    passwordDigest: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};