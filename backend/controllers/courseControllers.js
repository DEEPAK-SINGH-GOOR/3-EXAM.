const Course = require("../models/courseModel");

const getCourses = async (req, res) => {
    const courses = await Course.find();
    res.send(courses);
};

const addCourse = async (req, res) => {
    const courseAdd = await Course.create(req.body);

    if (courseAdd) {
        res.send("Course added successfully");
    } else {
        res.send("Error adding course");
    }
};

const deleteCourse = async (req, res) => {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (course) {
        res.send("Course deleted successfully");
    } else {
        res.send("Error deleting course");
    }
};

module.exports = { getCourses, addCourse, deleteCourse };
