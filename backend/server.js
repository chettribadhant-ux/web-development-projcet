const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Contact = require("./models/contact");

const app = express();

// ✅ CORS
app.use(cors({
  origin: "https://my-frontend-app-vxvj.onrender.com",
  methods: ["GET", "POST", "PUT","DELETE"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());
app.options("*", cors());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000,
})
.then(() => console.log("✅ MongoDB Atlas Connected"))
.catch(err => console.log("❌ DB Error:", err));

// ✅ FIXED CONTACT ROUTE (IMPORTANT)
app.post("/contact", async (req, res) => {
  console.log("🔥 Request received:", req.body);

  try {
    const { name, email, message } = req.body;

    // ✅ SEND RESPONSE IMMEDIATELY (fixes timeout)
    res.status(200).json({
      success: true,
      message: "Message received!",
    });

    // 💾 Save AFTER response (non-blocking)
    const newContact = new Contact({ name, email, message });

    console.log("💾 Saving to DB...");
    await newContact.save();

    console.log("✅ Saved successfully!");

  } catch (error) {
    console.error("❌ ERROR:", error);
  }
});

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT,'0.0.0.0',() => {
  console.log(`🚀 Server running on port ${PORT}`);
});