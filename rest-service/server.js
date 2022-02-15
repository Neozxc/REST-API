require("./DB/connection");
const express = require("express");
const addMovieDB = require("./Movies/addRoute");
const deleteRouter = require("./Movies/deleteRoute");
const listMovieDB = require("./Movies/listRoute");
const { testRoute } = require("./Movies/testController");
const { updateMovieDb } = require("./Movies/updateController");

// Creates an express application and sets it to variable called app
const app = express();
// Use app
app.use(express.json());
app.post(addMovieDB);
app.use(listMovieDB);
app.get(deleteRouter);
// app.use(testRoute);
// Setup super secret key and assign it to the variable
const port = process.env.PORT || 5003;

// Setting our server to listen on port 1234
app.listen(port, () => {
    console.log(`Connected to the port: ${port}`);
});


