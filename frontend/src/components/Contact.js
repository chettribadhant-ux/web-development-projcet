import { useState } from "react";
import axios from "axios";

function Contact() {
  const [success, setSuccess] = useState(false);

  const send = async (e) => {
    e.preventDefault();
    await axios.post("https://web-development-project.onrender.com/contact");
    setSuccess(true);
  };

  return (
    <div className="section fade" id="contact">

      {!success ? (
        <div className="card">
          <h2>Share Your Thoughts</h2>

          <form onSubmit={send}>
            <input placeholder="Name" /><br/><br/>
            <input placeholder="Email" /><br/><br/>
            <textarea placeholder="Message" /><br/><br/>

            <button className="btn">Send</button>
          </form>
        </div>
      ) : (
        <div className="popup">
          <h2>✨ Message Sent</h2>
          <p>Thanks for your idea 😊</p>
        </div>
      )}

    </div>
  );
}

export default Contact;