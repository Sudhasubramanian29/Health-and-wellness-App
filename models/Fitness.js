const mongoose = require("mongoose");

const fitnessSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  type: String,
  duration: Number,
  distance: Number,
  calories: Number,
  date: {
    type: Date,
    default: Date.now   
  }
});

module.exports = mongoose.model("Fitness", fitnessSchema);
