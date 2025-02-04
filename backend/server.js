const express = require("express");
const cors = require("cors");
const courseRouter = require("./routes/courseRoutes");
const dbConnect = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/course", courseRouter);

dbConnect();

app.listen(8090, () => {
    console.log("Server running on port 8090");
});
