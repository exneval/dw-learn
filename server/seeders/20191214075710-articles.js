"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "articles",
      [
        {
          title: "Selamat malam dunia",
          account_id: 3
        },
        {
          title: "Mengapa ku harus membunuhmu",
          account_id: 3
        },
        {
          title: "Mengapa harus aku",
          account_id: 1
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("articles", null, {});
  }
};
