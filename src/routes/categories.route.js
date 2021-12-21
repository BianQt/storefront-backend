"use strict";

const express = require("express");
const { categoriesCollection } = require("../models/index");

const booksRouter = express.Router();

booksRouter.get("/categories", getAllCategories);
booksRouter.get("/category/:id", getOneCategory);
booksRouter.post("/category", createCategory);
booksRouter.put("/category/:id", updateCategory);
booksRouter.delete("/category/:id", deleteCategory);

async function getAllCategories(req, res) {
  const allCategories = await categoriesCollection.read();
  res.status(200).json(allCategories);
}

async function getOneCategory(req, res) {
  const id = parseInt(req.params.id);
  const category = await categoriesCollection.read(id);
  res.status(200).json(category);
}

async function createCategory(req, res) {
  const obj = req.body;
  let category = await categoriesCollection.create(obj);
  res.status(201).json(category);
}

async function updateCategory(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  const updatedCategory = await categoriesCollection.update(id, obj);
  res.status(201).json(updatedCategory);
}

async function deleteCategory(req, res) {
  const id = parseInt(req.params.id);
  const deletedCategory = await categoriesCollection.delete(id);
  res.status(204).json(deletedCategory);
}

module.exports = booksRouter;
