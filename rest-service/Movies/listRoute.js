const { Router } = require("express");
const { listMovies} = require("./listController");
const listMovieDB = Router();

// Endpoints
listMovieDB.get("/listmovies", listMovies);

// Export
module.exports = listMovieDB;