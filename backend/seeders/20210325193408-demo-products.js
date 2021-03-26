"use strict";

const products = [
  {
    name: "Inca Cola",
    code: "000001",
    description: "Green go!",
  },
  {
    name: "Bidu",
    code: "000002",
    description: "Guinda cola",
  },
  {
    name: "Sorbete Letelier",
    code: "000003",
    description: "Sabooooor",
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     **/
    await queryInterface.bulkInsert("Products", products, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('Products', null, { truncate:true });
  },
};
