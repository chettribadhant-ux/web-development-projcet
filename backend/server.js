const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ CORS FIX (VERY IMPORTANT)
app.use(cors({
  origin: "*", // allow all (easy fix)
  methods: ["GET", "POST"],
  credentials: true
}));

// extra headers (fix for Render CORS)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// middleware
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Schema + Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Contact = mongoose.model("Contact", contactSchema);

// ✅ Routes
app.get("/", (req, res) => {
  res.send("API Running");
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    res.json({ success: true, message: "Data saved successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error saving data" });
  }
});

// ✅ Port (IMPORTANT for Render)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});