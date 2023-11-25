// TrackPage.tsx
import "./TrackPage.css";
import React from "react";

const TrackPage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="track-container">
        <img
          src="/track-coming-soon.png" // Make sure the path is correct based on your project structure
          alt="Track Coming Soon"
          className="track-image"
        />
        <div className="overlay-text">
          <h1>Track Coming Soon</h1>
        </div>
        <p className="paragraph-below-image">
          We understand that many of you are eagerly awaiting the official track
          layout for the Moon Grand Prix 2035, and we appreciate your patience.
          As of now, the reason for the undetermined official track layout is
          due to several significant factors that require careful consideration:
        </p>
      </div>
      <div className="exploration-container">
        <img
          src="/rocket-icon.png" // Make sure the path is correct based on your project structure
          alt="Rocket Icon"
          className="rocket-icon"
        />
        <div className="text-container">
          <p className="main-text">Lunar Surface Exploration</p>
          <p className="sub-text">
            The Moon's surface is still largely uncharted, and thorough
            exploration is an ongoing process. To ensure the safety of our
            participants and the success of the event, we need to meticulously
            survey and assess the lunar terrain to identify the most suitable
            route. This process involves a combination of remote sensing
            technology, data analysis, and on-site reconnaissance by astronauts
            and rovers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
