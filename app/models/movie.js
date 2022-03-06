'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsToMany(models.List, {
        through: 'MovieList',
        as: 'list',
        foreignKey: 'movie_id'
      });
    }
  };
  Movie.init({
    movie_name: DataTypes.STRING,
    movie_poster: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};