const express = require("express");
const router = express.Router();
const { addFitnessLog, getFitnessLogs } = require("../controllers/fitnessController");


router.post("/", addFitnessLog);
router.get("/:userId", getFitnessLogs);

module.exports = router;
