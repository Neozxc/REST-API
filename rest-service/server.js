const express = require("express");
const bodyParser = require("body-parser");

// Creates an express application and sets it to variable called app
const app = express();

// Uses body-parser
app.use(bodyParser.json());

// Setting our server to listen on port 1234
app.listen(1234, () => {
    console.log("Server is running on port 1234.")
});


