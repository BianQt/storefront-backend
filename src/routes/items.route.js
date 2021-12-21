"use strict";

const express = require("express");
const { itemsCollection } = require("../models/index");

const itemsRouter = express.Router();

itemsRouter.get("/items", getAllItems);
itemsRouter.get("/item/:id", getOneItem);
itemsRouter.post("/item", createItem);
itemsRouter.put("/item/:id", updateItem);
itemsRouter.delete("/item/:id", deleteItem);

async function getAllItems(req, res) {
  const allItems = await itemsCollection.read();
  res.status(200).json(allItems);
}

async function getOneItem(req, res) {
  const id = parseInt(req.params.id);
  const item = await itemsCollection.read(id);
  res.status(200).json(item);
}

async function createItem(req, res) {
  const obj = req.body;
  let item = await itemsCollection.create(obj);
  res.status(201).json(item);
}

async function updateItem(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body.qty;
  const updatedItem = await itemsCollection.update(id, {qty:obj});
  res.status(201).json(updatedItem);
}

async function deleteItem(req, res) {
  const id = parseInt(req.params.id);
  const deletedItem = await itemsCollection.delete(id);
  res.status(204).json(deletedItem);
}

module.exports = itemsRouter;
