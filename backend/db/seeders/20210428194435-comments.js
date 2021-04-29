"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeData = () => {
      let comments = [];
      let data = [
        "Greatest song ever!",
        "I wish this was by Taylor Swift",
        "This is one of the greatest applications I've used",
        "What an amazing experience I'm having on this website",
        "Wow this really brings me back to the good old days",
        "Wow the beats hear are unreal",
        "First",
        "Second",
        "Wow what a great artist",
        "Do you ever wonder what the world is like without music",
        "Wow that's so deep",
      ];

      for (let i = 1; i <= 5; i++) {
        let userId = Math.round(Math.random() * 5);
        for (let j = 1; j <= 13; j++) {
          comments.push({
            body: data[Math.round(Math.random() * 10)],
            userId,
            songId: j,
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
          });
        }
      }
      return comments;
    };

    let allComments = fakeData();
    return queryInterface.bulkInsert("Comments", allComments);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
