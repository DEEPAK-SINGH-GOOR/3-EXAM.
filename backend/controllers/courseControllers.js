const Course = require("../models/courseModel");

const getCourses = async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
};

const addCourse = async (req, res) => {
    try {
        const courseData = new Course(req.body);
        const savedCourse = await courseData.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        res.status(500).json({ message: "Error adding course", error });
    }
};

const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);

        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.status(200).json({ message: "Course deleted successfully" });
    } catch (err) {
        res.status(500).send("Error deleting course");
    }
};


module.exports = { getCourses, addCourse, deleteCourse };
