'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genres = sequelize.define('Genres', {
    genre: DataTypes.STRING
  }, {});
  Genres.associate = function(models) {
    // associations can be defined here
  };
  return Genres;
};