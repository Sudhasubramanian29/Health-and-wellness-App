const Nutrition = require("../models/Nutrition");

exports.addNutritionLog = async (req, res) => {
  try {
    const newEntry = await Nutrition.create(req.body);
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: "Failed to add nutrition data" });
  }
};

exports.getNutritionLogs = async (req, res) => {
  try {
    const logs = await Nutrition.find({ userId: req.params.userId });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch nutrition logs" });
  }
};
