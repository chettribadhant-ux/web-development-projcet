import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success/error message

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await axios.post(
        "https://web-development-project.onrender.com/contact", // ✅ FIXED URL
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000, // ⏱ prevents hanging forever
        }
      );

      if (response.status === 200) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error(error);

      if (error.response) {
        setStatus("❌ Server error: " + error.response.data.message);
      } else if (error.request) {
        setStatus("❌ No response from server. Try again later.");
      } else {
        setStatus("❌ Error: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          style={inputStyle}
          required
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          style={inputStyle}
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          style={{ ...inputStyle, height: "100px" }}
          required
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            ...buttonStyle,
            backgroundColor: loading ? "#ccc" : "#007bff",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && <p style={{ marginTop: "15px" }}>{status}</p>}
    </div>
  );
}

const container = {
  textAlign: "center",
  padding: "60px 20px",
};

const inputStyle = {
  display: "block",
  margin: "10px auto",
  padding: "10px",
  width: "260px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "10px 20px",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

export default Contact;