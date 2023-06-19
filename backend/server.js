import express from "express";
const app = express();
import "dotenv/config";
const PORT = process.env.PORT || 5000;
import useRouter from "./routes/goalRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";


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
