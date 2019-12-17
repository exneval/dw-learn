"use strict";
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define(
    "articles",
    {
      title: DataTypes.STRING,
      account_id: DataTypes.INTEGER
    },
    {}
  );
  articles.associate = function(models) {
    articles.belongsTo(models.accounts, {
      foreignKey: "account_id",
      as: "user",
      sourceKey: "id"
    });
  };
  return articles;
};
