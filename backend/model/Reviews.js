const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }, 
  courseId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Course" }, 
  rating: { type: Number, required: true, min: 1, max: 5 }, // Rating between 1 and 5
  comment: { type: String, required: true }, 
  userName:  { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, 
});

module.exports = mongoose.model("Review", reviewSchema);
