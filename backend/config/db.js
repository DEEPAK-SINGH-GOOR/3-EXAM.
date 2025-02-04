const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/courseDB");
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

module.exports = dbConnect;