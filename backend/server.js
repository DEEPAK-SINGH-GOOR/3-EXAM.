const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const courseRouter = require("./routes/courseRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/course", courseRouter);

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/courseDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected for Course management system");
    } catch (err) {
        console.log(err.message);
    }
};

dbConnect();

app.listen(8090, () => {
    console.log("Server running on port 8090");
});