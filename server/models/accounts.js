"use strict";
module.exports = (sequelize, DataTypes) => {
  const accounts = sequelize.define(
    "accounts",
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING
    },
    {}
  );
  accounts.associate = function(models) {
    // associations can be defined here
  };
  return accounts;
};
