'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlists = sequelize.define('Playlists', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});
  Playlists.associate = function(models) {
    // associations can be defined here
  };
  return Playlists;
};