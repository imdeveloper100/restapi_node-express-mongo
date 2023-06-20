import asyncHandler from "express-async-handler";
import modelSchema from "../models/goalModel.js";

// @desc Get Goals
// @route GET /api/goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await modelSchema.find();
  res.status(200).json(goals);
});

// @desc Set Goals
// @route POST /api/goals
// @access Private
export const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add some text to the goal");
    };
    const goal = await modelSchema.create({
      text: req.body.text,
    })
  res.status(200).json(goal );
});

// @desc Update Goals
// @route PUT /api/goals
// @access Private
export const updateGoals = asyncHandler(async (req, res) => {
  const goal = await modelSchema.findById(req.params.id);

  if(!goal) { 
    res.status(400)
    throw new Error("Goal not found");
  }
  const updatedGoal = await modelSchema.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedGoal);
});

// @desc Delete Goals
// @route DELETE /api/goals
// @access Private
export const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await modelSchema.findById(req.params.id);

  if(!goal) { 
    res.status(400)
    throw new Error("Goal not found");
  }

  await modelSchema.findByIdAndDelete(req.params.id)
  res.status(200).json({ id: req.params.id});
});
