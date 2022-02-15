const { Router } = require("express");
const { deleteMovie } = require("./deleteController");
const deleteRouter = Router();

// Endpoint
deleteRouter.delete("/delete/:id", deleteMovie);

// Export
module.exports = deleteRouter;