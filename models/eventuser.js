'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EventUser.init(
    {
      eventId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'events',
          key: 'id'
        }
      },
      attendeeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'EventUser',
      tableName: 'event_users'
    }
  );
  return EventUser;
};
