'use strict';
require('dotenv').config();

const POSTGRE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL ;

const {Sequelize, DataTypes} = require('sequelize');

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {dialectOptions: {ssl: {require: true, rejectUnauthorized: false}}} : {};

let sequelize = new Sequelize(POSTGRE_URL, sequelizeOptions);

const  items = require('./items.model');
const  categories = require('./categories.model');
const Collection = require('../lib/Collection.lib');

const itemsModel = items(sequelize, DataTypes);
const categoriesModel = categories(sequelize, DataTypes);

const categoriesCollection = new Collection(categoriesModel);
const itemsCollection = new Collection(itemsModel);

module.exports = {
    db : sequelize,
    categoriesCollection : categoriesCollection,
    itemsCollection : itemsCollection,
}