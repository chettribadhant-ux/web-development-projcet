const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Contact = require("./models/contact");

const app = express();

// ✅ CORS (IMPORTANT FIX)
app.use(cors({
  origin: "https://my-frontend-app-vxvj.onrender.com", // 🔁 replace with your frontend URL
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());
app.options("*", cors());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000, // prevent quick timeout
})
.then(() => console.log("✅ MongoDB Atlas Connected"))
.catch(err => console.log("❌ DB Error:", err));

// ✅ API route
app.post("/contact", async (req, res) => {
  console.log("🔥 Request received:", req.body);

  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });

    console.log("💾 Saving to DB...");
    await newContact.save();

    console.log("✅ Saved successfully!");

    // ✅ IMPORTANT: use 200
    res.status(200).json({
      success: true,
      message: "Message saved successfully",
    });

  } catch (error) {
    console.error("❌ ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});