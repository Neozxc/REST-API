require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error);
    }
};

connection();