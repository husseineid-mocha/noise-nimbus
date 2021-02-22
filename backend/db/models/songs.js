'use strict';
module.exports = (sequelize, DataTypes) => {
  const Songs = sequelize.define('Songs', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    audioFile: DataTypes.STRING,
    genreId: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  Songs.associate = function(models) {
    // associations can be defined here
  };
  return Songs;
};