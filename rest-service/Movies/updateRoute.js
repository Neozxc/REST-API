const { Router } = require("express");
const { updateMovies } = require("./updateController");
const updateMovieDBB = Router();

// Endpoints
updateMovieDBB.get("/update", updateMovies);

// Export
module.exports = updateMovieDBB;