import { useState } from "react";
import axios from "axios";
import "./index.css";

function App() {

  const [success, setSuccess] = useState(false);

  const send = async (e) => {
    e.preventDefault();
    await axios.post("https://web-development-projcet.onrender.com/contact");
    setSuccess(true);
  };

  return (
    <>
    
      <div className="container">

        {/* LEFT SIDE */}
        <div className="left">

          <h1>About Me</h1>
          <p>
            I am a passionate web developer, learner and student.
            I enjoy building modern websites and learning new technologies.
          </p>

          {/* Certificates */}
          <h2>Certificates</h2>

          <div className="card">
            HTML <a href="/certificates/html.pdf" target="_blank">View</a>
          </div>
          <div className="card">
            CSS <a href="/certificates/css.pdf" target="_blank">View</a>
          </div>
          <div className="card">
            Java <a href="/certificates/java.pdf" target="_blank">View</a>
          </div>
          <div className="card">
            Frontend <a href="/certificates/frontend.pdf" target="_blank">View</a>
          </div>
          <div className="card">
            MongoDB <a href="/certificates/mongodb.pdf" target="_blank">View</a>
          </div>
          <div className="card">
            Node.js <a href="/certificates/nodejs.pdf" target="_blank">View</a>
          </div>
          <div className="card">
            GitHub <a href="/certificates/github.pdf" target="_blank">View</a>
          </div>

          {/* Skills */}
          <h2>Skills</h2>
          <div className="card">HTML, CSS, JavaScript</div>
          <div className="card">React</div>
          <div className="card">Node.js</div>

        </div>

        {/* RIGHT SIDE */}
        <div className="right">

          <img src="/profile.jpg" className="profile" />

          <h2>Courses</h2>
          <div className="card-dark">Java</div>
          <div className="card-dark">Python</div>
          <div className="card-dark">C++</div>

          <h2>Hobbies</h2>
          <div className="card-dark">Coding</div>
          <div className="card-dark">Learning</div>
          <div className="card-dark">Exploring Tech</div>

        </div>

      </div>

      {/* CONTACT SECTION */}
      <div className="contact-box">

        {!success ? (
          <>
            <h2>What's on your mind?</h2>

            <form onSubmit={send}>
              <input placeholder="Name" /><br/>
              <input placeholder="Email" /><br/>
              <textarea placeholder="Message" /><br/>

              <button>Send</button>
            </form>
          </>
        ) : (
          <h2>Let's make it happen 🚀🚀</h2>
        )}

      </div>

    </>
  );
}

export default App;