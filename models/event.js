'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.belongsTo(models.User, {
        as: 'owner',
        foreignKey: 'ownerId'
      });
      Event.belongsToMany(models.User, {
        through: models.EventUser,
        as: 'attendees',
        foreignKey: 'eventId'
      });
    }
  }
  Event.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: DataTypes.STRING,
      ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      online: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      outdoor: DataTypes.BOOLEAN,
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: DataTypes.STRING,
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      picture: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'events'
    }
  );
  return Event;
};
