const dns =require('dns');
dns.setServers(['8.8.8.8','8.8.4.4']);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Contact = require("./models/contact");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (Atlas)
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log("DB Error:", err));

// API route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message saved" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Start server (IMPORTANT for Render)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});