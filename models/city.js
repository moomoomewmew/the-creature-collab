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
    }
  }
  City.init(
    {
      events: DataTypes.ARRAY,
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
