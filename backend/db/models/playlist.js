"use strict";
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define(
    "Playlist",
    {
      title: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      songId: DataTypes.INTEGER,
    },
    {}
  );
  Playlist.associate = function (models) {
    Playlist.belongsTo(models.User, { foreignKey: "userId" });
    Playlist.belongsTo(models.Song, { foreignKey: "songId" });
  };
  return Playlist;
};
