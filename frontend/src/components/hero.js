import { useEffect, useState } from "react";

function Hero() {
  const text = ["Programmer", "Learner", "Student"];
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    let j = 0;

    const interval = setInterval(() => {
      setDisplay(text[i].slice(0, j++));
      if (j > text[i].length) {
        j = 0;
        i = (i + 1) % text.length;
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section fade" id="home">
      <img src="/profile.jpg" className="profile" />

      <h1>Badhant Chettri</h1>
      <h2>{display}</h2>
    </div>
  );
}

export default Hero;