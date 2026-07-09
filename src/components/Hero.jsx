import React, { useState } from "react";
import "./Hero.css";

function Hero() {
  const [activeCard, setActiveCard] = useState(null);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="herocontainer">

      {/* Floating Cards */}
      <div
        className="floating-card card-1"
        onClick={() => setActiveCard("bridge")}
      />

      <div
        className="floating-card card-2"
        onClick={() => setActiveCard("mountain")}
      />

      <div
        className="floating-card card-3"
        onClick={() => setActiveCard("island")}
      />

      {/* Fullscreen Experience */}
      {activeCard && (
        <div className={`fullscreen-card ${activeCard}`}>
          <button
            className="close-btn"
            onClick={() => setActiveCard(null)}
          >
            ✕
          </button>

          {activeCard === "bridge" && (
            <div className="fullscreen-content">
              <h1>Golden Gate Escape</h1>
              <p>
                Experience iconic coastlines, luxury road trips,
                and unforgettable sunsets.
              </p>
            </div>
          )}

          {activeCard === "mountain" && (
            <div className="fullscreen-content">
              <h1>Alpine Adventure</h1>
              <p>
                Discover breathtaking mountain peaks and exclusive
                luxury retreats.
              </p>
            </div>
          )}

          {activeCard === "island" && (
            <div className="fullscreen-content">
              <h1>Tropical Paradise</h1>
              <p>
                Crystal clear waters, private beaches, and world-class resorts.
              </p>
            </div>
          )}
        </div>
      )}

      <div className="navbar">
        <div className="title1">MUTRAVEL</div>

        <div className="nav">
        <ul>
  <li onClick={() => scrollToSection("home")}>
    Home
  </li>

  <li onClick={() => scrollToSection("destinations")}>
    Destinations
  </li>

  <li onClick={() => scrollToSection("about")}>
    About Us
  </li>

  <li onClick={() => scrollToSection("trips")}>
    Trips
  </li>

  <li onClick={() => scrollToSection("contact")}>
    Contact
  </li>
</ul>
        </div>
      </div>

      <div className="content">
        <button className="search-button">
          Explore The World
        </button>

        <h1>
          Discover The Beauty
          <br />
          Of The World
        </h1>

        

        <button className="explore-button">
          Start Your Journey
        </button>
      </div>
    </div>
  );
}

export default Hero;