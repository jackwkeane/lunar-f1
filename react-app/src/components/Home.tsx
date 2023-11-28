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
        <p className="sponsor-text-large">
          HEINEKEN SILVER PROUDLY PRESENTS LUNAR GRAND PRIX 2035
        </p>
        <img
          src="/heineken.png" // Make sure the path is correct based on your project structure
          alt="Heineken Logo"
          className="heineken-image"
        />
        <p className="sponsor-text-normal">
          FOUNDING PARTNERS OF LUNAR GRAND PRIX 2035
        </p>
        <div className="founding-partners-container">
          <img
            src="/caesars.png" // Make sure the path is correct based on your project structure
            alt="Caesars Logo"
            className="founding-image"
          />
          <img
            src="/hardrock.png" // Make sure the path is correct based on your project structure
            alt="Hardrock Hotel Logo"
            className="founding-image"
          />
          <img
            src="/wynn.png" // Make sure the path is correct based on your project structure
            alt="Wynn Logo"
            className="founding-image"
          />
        </div>
        <p className="sponsor-text-normal">
          PRESENTING PARTNERS OF LUNAR GRAND PRIX 2035
        </p>
        <div className="presenting-partners-container">
          <img
            src="/chrome.png" // Make sure the path is correct based on your project structure
            alt="Google Chrome Logo"
            className="presenting-image"
          />
          <img
            src="/amex.png" // Make sure the path is correct based on your project structure
            alt="Hardrock Hotel Logo"
            className="presenting-image"
          />
          <img
            src="/hardrock.png" // Make sure the path is correct based on your project structure
            alt="Hardrock Hotel Logo"
            className="presenting-image"
          />
          <img
            src="/redbull.png" // Make sure the path is correct based on your project structure
            alt="Redbull Logo"
            className="presenting-image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
