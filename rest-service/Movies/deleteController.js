const Movie = require("./movieModel");

// Delete
exports.deleteMovie = async (req, res) => {
    const _id = req.params.id;

    try {
        const deleteDBB = await Movie.deleteOne({ _id: _id });
        if (!deleteDBB) {
            return res.status(404).send();
        }
        res.send(deleteDBB);
        console.log("SUCCESS");
    } catch (error) {
        res.status(500).send();
    }
};