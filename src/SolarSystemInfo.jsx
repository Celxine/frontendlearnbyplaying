import React, { useState, useEffect } from "react";
import "./SolarSystemInfo.css";

const SolarSystemInfo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setVideoLoaded(true), 200); 
  }, []);

  return (
    <div className="solar-system-container">
           {!videoLoaded && (
        <div className="background-cover">
          <img src="https://source.unsplash.com/1600x900/?space,galaxy" alt="Solar System" />
        </div>
      )}

     
      {videoLoaded && (
        <div className="video-background">
          <iframe
            src="https://www.youtube.com/embed/wYE7hRK7Ygo?autoplay=1&mute=1&loop=1&playlist=wYE7hRK7Ygo&controls=0&showinfo=0&modestbranding=1"
            title="Solar System Background"
           
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="info-card title-card">
        <h1>Our Solar System</h1>
      </div>

      <div className="info-card content-card">
        <h2>What is the largest planet in our solar system?</h2>
        <p className="solar-info">
          Our solar system includes the Sun, <span className="underlined">eight</span> planets, five officially named dwarf planets, hundreds of moons, and thousands of asteroids and 
          comets. Our solar system is located in the <span className="underlined">Milky Way</span>, a barred spiral galaxy with two major arms, and <span className="underlined">two</span> minor arms. Our Sun is in a 
          small, partial arm of the Milky Way called the Orion Arm, or Orion Spur, between the <span className="underlined">Sagittarius</span> and Perseus arms. Our solar system 
          orbits the center of the galaxy at about <span className="underlined">515,000</span> mph (828,000 kph). It takes about <span className="underlined">230 million</span> years to complete one orbit around the 
          galactic center.
        </p>
      </div>

      <button className="submit-button">Submit</button>
    </div>
  );
};

export default SolarSystemInfo;
