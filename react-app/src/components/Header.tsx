// Header.tsx

import React from "react";
import "./fonts.css";
import "./Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <div className="header-container">
        <Link to="/">
          <img src="f1-logo-white.png" alt="F1 Logo" className="logo-image" />
        </Link>
      </div>
      <div className="additional-container">
        <nav>
          <ul className="nav-list">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/track"}>Track</Link>
            </li>
            <li>
              <Link to={"/racers"}>Racers</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
