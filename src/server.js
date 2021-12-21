"use strict";

const express = require("express");
const app = express();
const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const logger = require("./middleware/logger");
const moviesRouter = require('./routes/items.route');
const customersRouter = require('./routes/categories.route');


app.use(logger);
app.use(express.json());
app.use(moviesRouter);
app.use(customersRouter);

app.get("/", (req, res) => {
  res.status(200).send("Server is Up & Running!");
});



app.use("*", notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
  });
}

module.exports = { app, start };
