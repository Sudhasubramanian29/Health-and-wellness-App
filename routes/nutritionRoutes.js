const express = require("express");
const { addNutritionLog, getNutritionLogs } = require("../controllers/nutritionController");
const router = express.Router();

router.post("/", addNutritionLog);
router.get("/:userId", getNutritionLogs);

module.exports = router;
