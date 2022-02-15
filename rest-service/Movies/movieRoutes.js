const { Router } = require("express");
const { addMovie, listMovies, testRoute } = require("./movieController");
const movieRouter = Router();

// Endpoints
movieRouter.post("/movie", addMovie);
movieRouter.get("/listmovies", listMovies);
movieRouter.get("/testroute", testRoute);

// Export
module.exports = movieRouter;