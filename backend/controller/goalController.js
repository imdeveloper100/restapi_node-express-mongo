import asyncHandler from "express-async-handler";

// @desc Get Goals
// @route GET /api/goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get the Goal" });
});

// @desc Set Goals
// @route POST /api/goals
// @access Private
export const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add some text to the goal");
    };
  res.status(200).json({ message: "Set the Goal" });
});

// @desc Update Goals
// @route PUT /api/goals
// @access Private
export const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated goal having ID: ${req.params.id}` });
});

// @desc Delete Goals
// @route DELETE /api/goals
// @access Private
export const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted goal having ID: ${req.params.id}` });
});
