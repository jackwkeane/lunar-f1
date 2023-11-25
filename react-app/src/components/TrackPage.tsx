// TrackPage.tsx
import "./TrackPage.css";
import React from "react";
import Footer from "./Footer";

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

      <div className="reason-element-container">
        <img
          src="/rocket-icon.png" // Make sure the path is correct based on your project structure
          alt="Rocket Icon"
          className="icon"
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

      <div className="reason-element-container">
        <img
          src="/earth-icon.png" // Make sure the path is correct based on your project structure
          alt="Earth Icon"
          className="icon"
        />
        <div className="text-container">
          <p className="main-text">Environmental Factors</p>
          <p className="sub-text">
            The Moon presents unique environmental challenges, such as extreme
            temperature variations, micrometeoroid impacts, and the
            ever-evolving lunar landscape. These factors can affect the track's
            design and location. We must gather sufficient data to determine the
            most stable and secure course for the race.
          </p>
        </div>
      </div>

      <div className="reason-element-container">
        <img
          src="/tech-icon.png" // Make sure the path is correct based on your project structure
          alt="Tech Icon"
          className="icon"
        />
        <div className="text-container">
          <p className="main-text">Technological Advancements</p>
          <p className="sub-text">
            The technology used in lunar rovers is constantly evolving. Our
            ability to navigate and traverse the Moon's surface is greatly
            dependent on the capabilities of these vehicles. We are closely
            monitoring technological advancements that may influence the track
            layout, ensuring that we utilize the latest innovations for the best
            possible race experience.
          </p>
        </div>
      </div>

      <div className="reason-element-container">
        <img
          src="/group-icon.png" // Make sure the path is correct based on your project structure
          alt="Group Icon"
          className="icon"
        />
        <div className="text-container">
          <p className="main-text">Collaborative Planning</p>
          <p className="sub-text">
            The Moon Grand Prix is a collaboration between multiple space
            agencies and private entities. The process of aligning goals,
            resources, and mission objectives among these partners takes time.
            We are working diligently to ensure that all stakeholders are on the
            same page before finalizing the track layout.
          </p>
        </div>
      </div>

      <div className="reason-element-container">
        <img
          src="/security-icon.png" // Make sure the path is correct based on your project structure
          alt="Security Icon"
          className="icon"
        />
        <div className="text-container">
          <p className="main-text">Safety and Precaution</p>
          <p className="sub-text">
            The Moon Grand Prix is a collaboration between multiple space
            agencies and private entities. The process of aligning goals,
            resources, and mission objectives among these partners takes time.
            We are working diligently to ensure that all stakeholders are on the
            same page before finalizing the track layout.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrackPage;
