const express = require("express");
const router = express.Router();
const ReviewModel = require("../model/Reviews"); 


router.post("/reviews", async (req, res) => {
    try {
      const { userId, courseId, rating, comment,userName } = req.body;
  
   
      if (!userId || !courseId || !rating || !comment) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Create a new review
      const newReview = new ReviewModel({ userId, courseId, rating, comment,userName });
      await newReview.save();
  
      res.status(201).json({ message: "Review added successfully", review: newReview });
    } catch (error) {
      res.status(500).json({ message: "Error adding review", error });
    }
  });
  

  router.get("/reviews/:courseId", async (req, res) => {
    try {
      const { courseId } = req.params;
  
      const reviews = await ReviewModel.find({ courseId })
      // .populate("userId", "name"); 
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ message: "Error fetching reviews", error });
    }
  });

  router.delete("/reviews/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedReview = await ReviewModel.findByIdAndDelete(id);
  
      if (!deletedReview) {
        return res.status(404).json({ message: "Review not found" });
      }
  
      res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting review", error });
    }
  });


  router.put("/reviews/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { rating, comment } = req.body;
  
      // Validate required fields
      if (!rating || !comment) {
        return res.status(400).json({ message: "Rating and comment are required" });
      }
  
      const updatedReview = await ReviewModel.findByIdAndUpdate(
        id,
        { rating, comment },
        { new: true }
      );
  
      if (!updatedReview) {
        return res.status(404).json({ message: "Review not found" });
      }
  
      res.status(200).json({ message: "Review updated successfully", review: updatedReview });  
    } catch (error) {
      res.status(500).json({ message: "Error updating review", error });
    }
  });
  
  module.exports = router