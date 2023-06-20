import express from "express";
import color from "colors";
import "dotenv/config";
import useRouter from "./routes/goalRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

import { connectDB } from "./config/db.js";
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/goals", useRouter);

// ErrorHandler
app.use(errorHandler);

// Port
app.listen(PORT, () => {
  console.log(`Server listening at http:/ /localhost:${PORT}`);
});

console.log("Server js file running");
