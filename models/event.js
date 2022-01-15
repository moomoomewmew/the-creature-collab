'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsTo(models.User, {
        as: 'owner',
        foreignKey: 'ownerId'
      });
    }
  }
  Event.init(
    {
      name: DataTypes.STRING,
      city: DataTypes.INTEGER,
      ownerId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      time: DataTypes.TIME,
      date: DataTypes.DATE,
      online: DataTypes.BOOLEAN,
      outdoor: DataTypes.BOOLEAN,
      address: DataTypes.STRING,
      state: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Event',
      modelName: 'events'
    }
  );
  return Event;
};
