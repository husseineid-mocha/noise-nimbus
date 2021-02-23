"use strict";
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    "Like",
    {
      liked: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
      songId: DataTypes.INTEGER,
    },
    {}
  );
  Like.associate = function (models) {
    Like.belongsTo(models.User, { foreignKey: "userId" });
    Like.belongsTo(models.Song, { foreignKey: "songId" });
  };
  return Like;
};
