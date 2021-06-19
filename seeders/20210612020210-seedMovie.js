'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Movies', [
     {
      name: "The Boy in Stripped Pajamas",
      synopsis: "Bruno is the eight-year-old son of the commandant at a concentration camp during WWII. His friendship with a Jewish boy he meets across the fence leads to unexpected consequences.",
      trailerUrl: "https://www.youtube.com/watch?v=9ypMp0s5Hiw",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZfG3pqgXC5RCybSvRLoDK4HTwEe_67n3xEak5pvPQkgrf2XD",
      genre: "Historical",
      Rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: "Eternal Sunshine of Spotless Mind",
      synopsis: "Joel and Clementine begin a relationship post a train journey together, unaware that they had previously been in a relationship, the memories of which were clinically erased.",
      trailerUrl: "https://www.youtube.com/watch?v=gkH3LpvOo0U",
      imgUrl: "https://upload.wikimedia.org/wikipedia/id/6/61/EternalSunshineoftheSpotlessMindPoster.jpg",
      genre: "Drama",
      Rating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
     },
    
   ])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Movies', null);
  }
};
