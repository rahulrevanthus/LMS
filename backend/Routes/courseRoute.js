const express = require("express")
const courseModel = require("../model/CreateCourse")

const route = express.Router()

route.get("/get-course-route", async (req, res) => {
  try {
    const courses = await courseModel.find();
    res.status(200).json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Error fetching courses", error });
  }
});

route.get("/getone-user-course/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const courses = await courseModel.find({ userId });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error });
  }
});

route.delete("/delete-user-course/:courseId", async (req, res) => {
  try {
    const { courseId } = req.params;
    const deletedCourse = await courseModel.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course deleted successfully", deletedCourse });
  } catch (error) {
    res.status(500).json({ message: "Error deleting course", error });
  }
});

route.put("/update-user-course/:courseId", async (req, res) => {
  try {
    const { courseId } = req.params;
    const updatedData = req.body;

    const updatedCourse = await courseModel.findByIdAndUpdate(
      courseId,
      updatedData,
      { new: true } 
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course updated successfully", updatedCourse });
  } catch (error) {
    res.status(500).json({ message: "Error updating course", error });
  }
});


route.get("/get-oneuser-coursebyid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const courses = await courseModel.find({ _id:id});
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error });
  }
});



module.exports = route;