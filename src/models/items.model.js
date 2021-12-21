"use strict";

const items = (sequelize, DataTypes) =>
  sequelize.define("items", {
    name: { type: DataTypes.STRING, allowNull: false },
    category: DataTypes.STRING,
    image: DataTypes.STRING,
    qty: DataTypes.INTEGER,
  });

module.exports = items;
