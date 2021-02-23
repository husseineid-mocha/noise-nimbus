"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Artists",
      [
        {
          name: "B.o.B",
          image: "https://noisenimbussongs.s3.amazonaws.com/bobAirplanes.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Einaudi",
          image:
            "https://noisenimbussongs.s3.amazonaws.com/Elements_-_Ludovico_Einaudi.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eminem",
          image:
            "https://noisenimbussongs.s3.amazonaws.com/The_Eminem_Show.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hugh Jackman",
          image:
            "https://noisenimbussongs.s3.amazonaws.com/greatest-showman.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lukas Graham",
          image:
            "https://noisenimbussongs.s3.amazonaws.com/7-Years-by-Lukas-Graham.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maroon 5",
          image:
            "https://noisenimbussongs.s3.amazonaws.com/Maroon_5_-_Overexposed.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lil Nas",
          image:
            "https://noisenimbussongs.s3.amazonaws.com/Old_Town_Road_cover.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bastille",
          image: "https://noisenimbussongs.s3.amazonaws.com/pompei.jpeg.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Post Malone",
          image: "https://noisenimbussongs.s3.amazonaws.com/sunflower.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Charlie Puth",
          image: "https://noisenimbussongs.s3.amazonaws.com/seeyouagain.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Soulja Boy",
          image: "https://noisenimbussongs.s3.amazonaws.com/Soulja_boy.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Taylor Swift",
          image: "https://noisenimbussongs.s3.amazonaws.com/Taylor_Swift.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Avicii",
          image: "https://noisenimbussongs.s3.amazonaws.com/Avicii.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Artists", null, {});
  },
};
