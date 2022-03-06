'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.List, {
        foreignKey: 'person_id',
        as: 'list',
      });
    
    
     User.belongsTo(models.Login
    , {
      foreignKey: 'login_id',
      as: 'login'
    });
    }
  };
  User.init({
    login_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};