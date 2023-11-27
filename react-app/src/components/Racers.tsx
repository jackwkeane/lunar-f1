// Footer.tsx

import React from "react";
import "./Racers.css";
import Footer from "./Footer";

const Racers: React.FC = () => {
  return (
    <div className="main">
      <div className="title-and-intro">
        <p className="main-text">Top Lunar Racers</p>
        <p className="sub-text">
          Teams from around the globe are gearing up for this historic moment,
          investing in state-of-the-art technologies to adapt their cars to the
          lunar conditions. Tires designed to grip the dusty surface,
          aerodynamics tailored for low-gravity maneuvers, and propulsion
          systems optimized for the lunar atmosphere—all these elements come
          together to create a new era in the evolution of Formula 1.
        </p>
      </div>

      <div className="racers-container">
        <img
          src="/max-verstappen-player-card.png" // Make sure the path is correct based on your project structure
          alt="Max Verstappen"
          className="racer"
        />
        <img
          src="/sergio-perez-player-card.png" // Make sure the path is correct based on your project structure
          alt="Sergio Perez"
          className="racer"
        />
        <img
          src="/lewis-hamilton-player-card.png" // Make sure the path is correct based on your project structure
          alt="Lewis Hamilton"
          className="racer"
        />
        <img
          src="/fernando-alonso-player-card.png" // Make sure the path is correct based on your project structure
          alt="Fernando Alonso"
          className="racer"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Racers;
