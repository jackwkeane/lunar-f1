// Footer.tsx

import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img src="/f1-logo-white.png" alt="Formula One Logo" className="logo" />
      <p>© 2003-2023 Formula One World Championship Limited</p>
    </footer>
  );
};

export default Footer;
