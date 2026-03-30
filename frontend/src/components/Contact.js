import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  // 1. Create state to hold form data (matching your handleSubmit variable)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for button loading status
  const [loading, setLoading] = useState(false);

  // 2. Update state as you type
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Send data to your LIVE backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // CHANGED: Added your specific Render URL and /contact endpoint
      await axios.post("https://web-development-projcet.onrender.com/contact", formData);
      
      alert("Message sent successfully!");
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "white" }}>
      <h2>Contact Me</h2>
      <p>📞 Phone: 1234567890</p>
      <p>📧 Email: your@email.com</p>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
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
          style={{...inputStyle, height: '100px'}} 
          required 
        />

        <button type="submit" disabled={loading} style={{
          padding: "10px 20px",
          background: loading ? "#ccc" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: loading ? "not-allowed" : "pointer"
        }}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  display: "block",
  margin: "10px auto",
  padding: "10px",
  width: "250px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

export default Contact;
