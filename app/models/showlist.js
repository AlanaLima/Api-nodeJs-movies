'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShowList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ShowList.init({
    show_id: DataTypes.INTEGER,
    list_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShowList',
  });
  return ShowList;
};