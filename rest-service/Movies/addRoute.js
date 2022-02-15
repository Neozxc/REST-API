const { Router } = require("express");
const { addMovie } = require("./addController");
const addMovieDB = Router();

// Endpoints
addMovieDB.post("/movie", addMovie);

// Export
module.exports = addMovieDB;