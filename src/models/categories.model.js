"use strict";

const categories = (sequelize, DataTypes) =>
  sequelize.define("categories", {
    name: { type: DataTypes.STRING, allowNull: false },
    display_name: DataTypes.STRING,
    description: DataTypes.STRING,
  });

module.exports = categories;
