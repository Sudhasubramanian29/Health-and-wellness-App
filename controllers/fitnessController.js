const mongoose = require("mongoose");
const Fitness = require("../models/Fitness");

exports.addFitnessLog = async (req, res) => {
  try {
    const { userId, type, duration, distance, calories } = req.body;

    if (!userId || !type || !duration) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    const newLog = await Fitness.create({ userId, type, duration, distance, calories });
    res.status(201).json(newLog);
  } catch (error) {
    console.error("Error adding fitness log:", error.message);
    res.status(500).json({ message: "Failed to add fitness log" });
  }
};

exports.getFitnessLogs = async (req, res) => {
  let { userId } = req.params;

  userId = userId.trim(); 

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    console.log("Invalid userId format");
    return res.status(400).json({ message: "Invalid user ID format" });
  }

  try {
    const logs = await Fitness.find({ userId: new mongoose.Types.ObjectId(userId) });
    res.status(200).json(logs);
  } catch (error) {
    console.error("Error fetching fitness logs:", error.message);
    res.status(500).json({ message: "Failed to fetch fitness logs" });
  }
};
