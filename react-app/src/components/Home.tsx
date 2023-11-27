import React from "react";
import "./Home.css";
import "./Racers.css";
import Footer from "./Footer";
import Button from "./Button";

const Home: React.FC = () => {
  return (
    <div className="main">
      <div className="title-and-intro">
        <p className="main-text">GET READY FOR LUNAR GRAND PRIX 2035</p>
        <p className="sub-text">
          Formula 1® will electrify the lunar landscape in November of 2035, for
          an unforgettable race traversing the otherworldly terrain of the
          Moon's surface.
        </p>
        <p className="sub-text">
          The Moon Grand Prix's predicted track length of 3 miles will wind its
          way past iconic lunar landmarks and cratered landscapes as drivers
          test the limits of technology, hurtling through the vacuum of space at
          speeds of up to 250 mph. The stakes have never been higher, as
          astronauts, rovers, and space travelers watch in awe.
        </p>
        <p className="sub-text">
          The stakes have never been higher, as astronauts, rovers, and space
          travelers watch in awe.
        </p>
      </div>
      <div className="image-container">
        <img
          src="/home-page-image.png" // Make sure the path is correct based on your project structure
          alt="Lunar F1 track"
          className="home-image"
        />
      </div>

      <div className="button-container">
        <Button name="View Racers"></Button>
        <Button name="View Track"></Button>
      </div>

      <div className="sponsors">
        <div className="founding-partners-container"></div>

        <div className="presenting-partners-container"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
