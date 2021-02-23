"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Genres",
      [
        {
          genre: "pop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre: "hip-hop",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre: "rock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre: "instrumental",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre: "alternative",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Genres", null, {});
  },
};
