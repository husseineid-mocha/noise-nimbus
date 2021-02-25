"use strict";
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    "Song",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      audioFile: DataTypes.STRING,
      genreId: DataTypes.INTEGER,
      artistName: DataTypes.STRING,
    },
    {}
  );
  Song.associate = function (models) {
    Song.hasMany(models.Playlist, { foreignKey: "songId" });
    Song.hasMany(models.Comment, { foreignKey: "songId" });
    Song.hasMany(models.Like, { foreignKey: "songId" });
    Song.belongsTo(models.Genre, { foreignKey: "genreId" });
  };
  return Song;
};
