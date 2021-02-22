'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
  };
  return Comments;
};