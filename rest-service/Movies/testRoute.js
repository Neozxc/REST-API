const { Router } = require("express");
const { testRoute } = require("./testController");
const movieRouter = Router();

// Endpoints
movieRouter.get("/testroute", testRoute);
// Export
module.exports = movieRouter;