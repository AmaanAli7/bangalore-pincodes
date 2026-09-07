const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pincodeRoutes = require("./routes/pincode.routes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/pincodes", pincodeRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "Bangalore Pincode Explorer API is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});