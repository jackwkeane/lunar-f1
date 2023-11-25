// Header.tsx

import React from "react";
import "./fonts.css";
import "./Header.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <div className="header-container">
        <img src="f1-logo-white.png" alt="F1 Logo" className="logo-image" />
        {/* You can add more header content or navigation links here */}
      </div>
      <div className="additional-container">
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Track</a>
            </li>
            <li>
              <a href="#">Racers</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
