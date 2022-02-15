const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },

    actors: [
        {
            type: String
        }
    ]
});

// Set it to variable
const Movie = mongoose.model("Movies", movieSchema);

// Export variable for later use in the app
module.exports = Movie;