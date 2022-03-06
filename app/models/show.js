'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Show.belongsToMany(models.List, {
        through: 'ShowList',
        as: 'list',
        foreignKey: 'show_id'
      
      });
    }
  };
  Show.init({
    show_name: DataTypes.STRING,
    show_poster: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Show',
  });
  return Show;
};