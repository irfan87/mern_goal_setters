const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json({ message: "Get Goals" });
});

router.post("/", (req, res) => {
	res.status(200).json({ message: "Create Goal" });
});

router.get("/:id", (req, res) => {
	res.status(200).json({ message: `Get Goal #${req.params.id}` });
});

router.put("/:id", (req, res) => {
	res.status(200).json({ message: `Update Goal #${req.params.id}` });
});

router.delete("/:id", (req, res) => {
	res.status(200).json({ message: `Delete Goal #${req.params.id}` });
});

module.exports = router;