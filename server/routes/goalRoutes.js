const express = require("express");
const {
	getGoals,
	postGoal,
	getGoal,
	updateGoal,
	deleteGoal,
} = require("../controllers/goalController");
const router = express.Router();

router.get("/", getGoals);

router.post("/", postGoal);

router.get("/:id", getGoal);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

module.exports = router;
