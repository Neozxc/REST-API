const Movie = require("./movieModel");

// Build function to list all of our DB entries
exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({ movies });
        console.log("Showing all movies");
    } catch (error) {
        console.log(error);
    }
};