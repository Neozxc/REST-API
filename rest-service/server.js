require("./DB/connection");
const express = require("express");
const movieRouter = require("./Movies/movieRoutes")


// Creates an express application and sets it to variable called app
const app = express();
app.use(express.json());
app.use(movieRouter);

// Open port for now
const port = 5003;

// Setting our server to listen on port 1234
app.listen(port, () => {
    console.log(`Connected to the port: ${port}`);
});


