import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  const getClassName = () => {
    // Determine className based on the 'name' prop
    switch (name) {
      case "View Racers":
        return "view-racers-button";
      // Add more cases for different button types if needed
      case "View Track":
        return "view-track-button";
      default:
        return "default-button-class";
    }
  };

  const getRoute = () => {
    // Determine className based on the 'name' prop
    switch (name) {
      case "View Racers":
        return "/racers";
      // Add more cases for different button types if needed
      case "View Track":
        return "/track";
      default:
        return "default-button-class";
    }
  };

  const buttonText = name; // You can customize the text based on the 'name' prop

  return (
    <div>
      <Link to={getRoute()} className={getClassName()}>
        {buttonText}
      </Link>
    </div>
  );
};

export default Button;
