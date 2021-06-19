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
   return queryInterface.bulkInsert('Genres', [
     {
      name: "Comedy",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: "Action",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
     {
      name: "Horror",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     name: "Drama",
     createdAt: new Date(),
      updatedAt: new Date()
   }
   ])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Genres', null);
  }
};
