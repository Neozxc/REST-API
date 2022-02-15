const Movie = require("./movieModel");

// Build function to add a new entry to our DB
exports.addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({ newMovie });
        console.log("Adding to db");
    } catch (error) {   
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};