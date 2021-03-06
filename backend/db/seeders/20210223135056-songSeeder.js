"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Songs",
      [
        {
          title: "Airplanes",
          description: "",
          image: "https://noisenimbussongs.s3.amazonaws.com/bobAirplanes.jpg",
          audioFile:
            "https://noisenimbussongs.s3.amazonaws.com/B.o.B+-+Airplanes+(feat.+Hayley+Williams+of+Paramore)+%5BOfficial+Video%5D-320k.mp3",
          genreId: 1,
          artistName: "B.o.B",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Experience",
          description: "",
          image:
            "https://noisenimbussongs.s3.amazonaws.com/Elements_-_Ludovico_Einaudi.jpg",
          audioFile:
            "https://noisenimbussongs.s3.amazonaws.com/Einaudi_+Experience-320k.mp3",
          genreId: 4,
          artistName: "Ludovico Einaudi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mockingbird",
          description: "",
          image:
            "https://noisenimbussongs.s3.amazonaws.com/The_Eminem_Show.jpg",
          audioFile:
            "https://noisenimbussongs.s3.amazonaws.com/Eminem+-+Mockingbird.mp3",
          genreId: 2,
          artistName: "Eminem",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "From Now On",
          description: "",
          image:
            "https://noisenimbussongs.s3.amazonaws.com/greatest-showman.jpg",
          audioFile:
            "https://noisenimbussongs.s3.amazonaws.com/From+Now+On.mp3",
          genreId: 5,
          artistName: "Hugh Jackman",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "7 Years",
          description: "",
          image:
            "https://noisenimbussongs.s3.amazonaws.com/7-Years-by-Lukas-Graham.jpg",
          audioFile:
            "https://noisenimbussongs.s3.amazonaws.com/Lukas+Graham+-+7+Years+.mp3",
          genreId: 1,
          artistName: "Lukas Graham",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Girls Like you",
          description: "",
          image:
            "https://noisenimbussongs.s3.amazonaws.com/Maroon_5_-_Overexposed.png",
          audioFile:
            "https://noisenimbussongs.s3.amazonaws.com/Maroon+5+-+Girls+Like+You+ft.+Cardi+B.mp3",
          genreId: 1,
          artistName: "Maroon 5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Old Town Road",
          description: "",
          image:
            "https://noisenimbussongs.s3.amazonaws.com/Old_Town_Road_cover.jpg",
          audioFile:
            "https://noisenimbussongs.s3.amazonaws.com/Old+Town+Road+Official+Video+ft+Billy+Ray+Cyrus.mp3",
          genreId: 2,
          artistName: "Lil Nas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pompeii",
          description: "",
          image: "https://noisenimbussongs.s3.amazonaws.com/pompei.jpeg.jpg",
          audioFile:
            "https://noisenimbussongs.s3.amazonaws.com/Pompeii+-320k.mp3",
          genreId: 1,
          artistName: "Bastille",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sunflower",
          description: "",
          image: "https://noisenimbussongs.s3.amazonaws.com/sunflower.jpg",
          audioFile:
            "https://noisenimbussongs.s3.amazonaws.com/Post+Malone%2C+Swae+Lee+-+Sunflower+-320k.mp3",
          genreId: 2,
          artistName: "Post Malone",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "See You Again",
          description: "",
          image: "https://noisenimbussongs.s3.amazonaws.com/seeyouagain.jpg",
          audioFile:
            "https://noisenimbussongs.s3.amazonaws.com/See+You+Again+ft.+Charlie+Puth+.mp3",
          genreId: 1,
          artistName: "Charlie Puth",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Crank That",
          description: "",
          image: "https://noisenimbussongs.s3.amazonaws.com/Soulja_boy.jpeg",
          audioFile:
            "https://noisenimbussongs.s3.amazonaws.com/Soulja+Boy+Tell'em+-+Crank+That+(Soulja+Boy)-320k.mp3",
          genreId: 2,
          artistName: "Soulja Boy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Blank Space",
          description: "",
          image: "https://noisenimbussongs.s3.amazonaws.com/Taylor_Swift.png",
          audioFile:
            "https://noisenimbussongs.s3.amazonaws.com/Taylor+Swift+-+Blank+Space-320k.mp3",
          genreId: 1,
          artistName: "Taylor Swift",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Waiting For Love",
          description: "",
          image: "https://noisenimbussongs.s3.amazonaws.com/Avicii.png",
          audioFile:
            "https://noisenimbussongs.s3.amazonaws.com/Waiting+For+Love.mp3",
          genreId: 1,
          artistName: "Avicii",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Songs", null, {});
  },
};
