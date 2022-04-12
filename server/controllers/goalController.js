// @desc				GET Goals
// @routes			GET /api/goals
// @access			Private
const getGoals = (req, res) => {
	res.status(200).json({ message: "Get Goals" });
};

// @desc				POST Goals
// @routes			POST /api/goals
// @access			Private
const postGoal = (req, res) => {
	res.status(200).json({ message: "Post Goal" });
};

// @desc				GET Goal
// @routes			GET /api/goals/:id
// @access			Private
const getGoal = (req, res) => {
	const goal_id = req.params.id;

	res.status(200).json({ message: `Get Goal #${goal_id}` });
};

// @desc				PUT Goals
// @routes			PUT /api/goals/:id
// @access			Private
const updateGoal = (req, res) => {
	const goal_id = req.params.id;

	res.status(200).json({ message: `Update Goal #${goal_id}` });
};

// @desc				DELETE Goals
// @routes			DELETE /api/goals/:id
// @access			Private
const deleteGoal = (req, res) => {
	const goal_id = req.params.id;

	res.status(200).json({ message: `Delete Goal #${goal_id}` });
};

module.exports = {
	getGoals,
	postGoal,
	getGoal,
	updateGoal,
	deleteGoal,
};
