'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helper/bycrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Movie, {foreignKey: "authorId"} )
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING, 
      validate: {
        notEmpty : {
          args : true,
          msg : "username must not be empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      
      validate: {
        notEmpty : {
          args : true,
          msg : "Email must not be empty"
        },
        isEmail : {
          args : true,
          msg : "format must be email"
        }
        // unique: {
        //   args: true,
        //   msg: 'Email address already in use!'
        // }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          args : true,
          msg: "Password is required!"
        },
        len : {
          args : [5],
          msg : "Password must be more than 5 character!"
        }
      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.addHook("beforeCreate", (instance) => {
    instance.password = hashPassword(instance.password);
  })
  User.addHook("beforeCreate", (instance) => {
    instance.role = "Admin";
  })
  return User;
};