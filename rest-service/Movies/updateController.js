const Movie = require("./movieModel");

// Delete
exports.updateMovieDb = async (req, res) => {
    try {
        const updateM = await Movie.updateOne({ name: "Space" });
        res.status(200).send({ movies: updateM });
        console.log("Updating db");
    } catch (error) {
        console.log(error);
    }
};