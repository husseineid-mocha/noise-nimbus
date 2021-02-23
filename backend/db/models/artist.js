"use strict";
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define(
    "Artist",
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {}
  );
  Artist.associate = function (models) {
    Artist.hasMany(models.Song, { foreignKey: "artistId" });
  };
  return Artist;
};
