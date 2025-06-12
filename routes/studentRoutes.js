const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Create student
router.post("/", async (req, res) => {
  try {
    const {
      name, mobile, dateOfBirth,
      degree, address, rollNo, age, email
    } = req.body;

    // Assign random avatar URL
    const randomImage = `https://avatar.iran.liara.run/public/`;

    const newStudent = new Student({
      name,
      mobile,
      dateOfBirth,
      degree,
      address,
      rollNo,
      age,
      email,
      image: randomImage, // ✅ random avatar
    });

    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    console.error("Error creating student:", err);
    res.status(500).json({ error: "Server Error" });
  }
});


// Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find().sort({ name: 1 });
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get student by ID
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update student by ID
router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete student by ID
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
