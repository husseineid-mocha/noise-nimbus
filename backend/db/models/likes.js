'use strict';
module.exports = (sequelize, DataTypes) => {
  const Likes = sequelize.define('Likes', {
    liked: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});
  Likes.associate = function(models) {
    // associations can be defined here
  };
  return Likes;
};