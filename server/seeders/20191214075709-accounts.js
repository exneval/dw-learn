"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "accounts",
      [
        {
          email: "budi@idub.com",
          username: "budiidub"
        },
        {
          email: "budi2@2idub.com",
          username: "bud2iidub2"
        },
        {
          email: "bastian@still.com",
          username: "bastil"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("accounts", null, {});
  }
};
