const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB connected");
  app.listen(5000, () => console.log("Server running on http://localhost:5000"));
})
.catch(err => console.error(err));
