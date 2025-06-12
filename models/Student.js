const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  degree: { type: String, required: true },
  address: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Student", studentSchema);
