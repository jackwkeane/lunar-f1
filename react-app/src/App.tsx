import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import TrackPage from "./components/TrackPage";
import RacersPage from "./components/RacersPage";

const App: React.FC = () => {
  return (
    <div className="mainApp">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/racers" element={<RacersPage />} />
          <Route path="/track" element={<TrackPage />} />
          {/* Add more routes for additional pages */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
