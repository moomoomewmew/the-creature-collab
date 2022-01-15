'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      City.belongsTo(models.User, { foreignKey: 'users' });
      City.hasMany(models.Event, { foreignKey: 'cityId' });
    }
  }
  City.init(
    {
      cityName: DataTypes.STRING,
      events: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        onDelete: 'CASCADE',
        references: {
          model: 'events',
          key: 'id'
        }
      },
      users: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'City',
      tableName: 'cities'
    }
  );
  return City;
};
