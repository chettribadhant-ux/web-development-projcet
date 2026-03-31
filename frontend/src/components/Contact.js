import { useState } from "react";
import axios from "axios";

function Contact() {
  const [success, setSuccess] = useState(false);

  const send = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://web-development-projcet.onrender.com/contact");
      setSuccess(true);
    } catch {
      alert("Server error");
    }
  };

  return (
    <div className="section fade" style={{ textAlign: "center" }}>
      
      {!success ? (
        <div className="card" style={{ maxWidth: "400px", margin: "auto" }}>
          <h2>Share your thoughts</h2>

          <form onSubmit={send}>
            <input placeholder="Mr/Mrs Name" /><br/><br/>
            <input placeholder="Email" /><br/><br/>
            <textarea placeholder="Message" /><br/><br/>

            <button className="btn">Send</button>
          </form>
        </div>
      ) : (
        <h2 style={{ marginTop: "100px" }}>
          Message sent! Thanks for your idea 😊
        </h2>
      )}

    </div>
  );
}

export default Contact;