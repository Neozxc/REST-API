const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    actor: [
        {
            type: String
        }
    ]
});

// Set it to variable
const Movie = mongoose.model("movies", movieSchema);

// Export variable for later use in the app
module.exports = Movie;