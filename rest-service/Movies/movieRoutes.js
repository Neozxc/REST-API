const { Router } = require("express");
const { add, deleteMovie, list, update, testRoute } = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", add);
movieRouter.delete("/delete:id", deleteMovie);
movieRouter.get("/list", list);
movieRouter.put("/update", update);

// For test purposes
movieRouter.get("/test", testRoute);

module.exports = movieRouter;