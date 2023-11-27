import ListGroup from "./components/ListGroup";
import Header from "./components/Header";
import TrackPage from "./components/TrackPage";
import Racers from "./components/Racers";
import "./App.css";

function App() {
  return (
    <div className="mainApp">
      <Header />
      <Racers />
      {/* Other content of your app */}
    </div>
  );
}

export default App;
