const express = require("express");
const {
	getGoals,
	postGoal,
	getGoal,
	updateGoal,
	deleteGoal,
} = require("../controllers/goalController");

const router = express.Router();

router.route("/").get(getGoals).post(postGoal);

router.route("/:id").get(getGoal).put(updateGoal).delete(deleteGoal);

module.exports = router;
