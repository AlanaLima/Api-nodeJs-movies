'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MovieList.init({
    movie_id: DataTypes.INTEGER,
    list_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MovieList',
  });
  return MovieList;
};