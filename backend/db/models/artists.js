'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artists = sequelize.define('Artists', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Artists.associate = function(models) {
    // associations can be defined here
  };
  return Artists;
};