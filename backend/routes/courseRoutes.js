const { Router } = require("express");
const { getCourses, addCourse, deleteCourse } = require("../controllers/courseControllers");

const courseRouter = Router();

courseRouter.get("/all", getCourses);
courseRouter.post("/create", addCourse);
courseRouter.delete("/delete/:id", deleteCourse);  
module.exports = courseRouter;