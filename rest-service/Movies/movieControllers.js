const Movie = require("./movieModel");

// Create
exports.add = async (req, res) => {
    try {
        const newMovie = await Movie.create({ name: "Clean", actor: "Micheal" });
        res.status(200).send({ newMovie });
        console.log("Adding to db");
    } catch (error) {   
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};

// List
exports.list = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({ movies });
        console.log("Showing all movies");
    } catch (error) {
        console.log(error);
    }
};

// Update
exports.update = async (req, res) => {
    try {
        const updateM = await Movie.updateOne({ name: "Space" });
        res.status(200).send({ movies: updateM });
        console.log("Updating db");
    } catch (error) {
        console.log(error);
    }
};

// Delete
exports.deleteMovie = async (req, res) => {
    const _id = req.params.id;

    try {
        const deleteDBB = await Movie.deleteOne({ _id });
        res.status(200).send(deleteDBB);
        console.log("SUCCESS");
    } catch (error) {
        res.status(500).send();
    }
};

// For testing purposes
exports.testRoute = async (req, res) => {
    res.status(200).send({ "test": "Does work" });
    console.log("test working");
} ;