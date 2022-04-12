const asyncHandler = require("express-async-handler");

// @desc				GET Goals
// @routes			GET /api/goals
// @access			Private
const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Get Goals" });
});

// @desc				POST Goals
// @routes			POST /api/goals
// @access			Private
const postGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);

		throw new Error("Please add a text field");
	}

	res.status(200).json({ message: req.body.text });
});

// @desc				GET Goal
// @routes			GET /api/goals/:id
// @access			Private
const getGoal = asyncHandler(async (req, res) => {
	const goal_id = req.params.id;

	res.status(200).json({ message: `Get Goal #${goal_id}` });
});

// @desc				PUT Goals
// @routes			PUT /api/goals/:id
// @access			Private
const updateGoal = asyncHandler(async (req, res) => {
	const goal_id = req.params.id;

	res.status(200).json({ message: `Update Goal #${goal_id}` });
});

// @desc				DELETE Goals
// @routes			DELETE /api/goals/:id
// @access			Private
const deleteGoal = asyncHandler(async (req, res) => {
	const goal_id = req.params.id;

	res.status(200).json({ message: `Delete Goal #${goal_id}` });
});

module.exports = {
	getGoals,
	postGoal,
	getGoal,
	updateGoal,
	deleteGoal,
};
