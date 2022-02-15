// Test
exports.testRoute = async (req, res) => {
    res.status(200).send({ "test": "Does work" });
    console.log("test working");
} ;