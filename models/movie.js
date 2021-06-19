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
      // define association here
      Movie.belongsTo(models.Genre, {foreignKey: "genreId"})
      Movie.belongsTo(models.User, {foreignKey: "authorId"})
    }
  };
  Movie.init({
    name: {
      type: DataTypes.STRING, 
      validate: {
        notEmpty : {msg : " Name Field Is Required!"}
      }
    },
    status: DataTypes.STRING,
    synopsis: {
      type: DataTypes.TEXT, 
      validate: {
        notEmpty : {msg : " Synopsis Field Is Required!"}
      }
    },
    trailerUrl: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    rating: {
      type: DataTypes.INTEGER, 
      isNumeric: true,
      validate: {
        min: 1, 
        max: 10,  
      }
    },
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  Movie.addHook("beforeCreate", (instance) => {
    instance.status = "Active"
  })
  return Movie;
};