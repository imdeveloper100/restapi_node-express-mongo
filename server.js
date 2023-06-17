import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.get("/", (req, res) => {
  res.send("Hello MERN");
});

// Port
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
