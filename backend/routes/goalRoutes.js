import express from "express";
const router = express.Router();
import {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} from "../controller/goalController.js";

// Routes
// We have the same line of code for Get and Post, we can write it in one line 
// router.get("/", getGoals);
// router.post("/", setGoals);
router.route("/").get(getGoals).post(setGoals);

// We have the same line of code for Put and Delete, we can write it in one line 
// router.put("/:id", updateGoals);
// router.delete("/:id", deleteGoals);
router.route("/:id").put(updateGoals).delete(deleteGoals);

export default router;
