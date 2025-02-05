const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const dotenv = require("dotenv");
// dotenv.config();
const PORT = process.env.PORT || 3000;
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/socialMedia");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
};
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
