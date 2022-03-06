'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      List.belongsTo(models.User
        , {
        foreignKey: 'person_id',
        as: 'user'});

      List.belongsToMany(models.Movie, {
              through: 'MovieList',
              as: 'movies',
              foreignKey: 'list_id'
            });
            
      List.belongsToMany(models.Show, {
              through: 'ShowList',
              as: 'shows',
              foreignKey: 'list_id'
            });
          
    }
  };
  List.init({
    person_id: DataTypes.INTEGER,
    list_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};