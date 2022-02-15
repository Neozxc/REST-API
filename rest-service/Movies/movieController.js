const Movie = require("./movieModel");

// Build function to add a new entry to our DB
exports.addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({ movie: newMovie });
    } catch (error) {   
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};

// Build function to list all of our DB entries
exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({ movies });
    } catch (error) {
        console.log(error);
    }
};

// Test
exports.testRoute = async (req, res) => {
    res.status(200).send({ "test": "Does work" });
} ;