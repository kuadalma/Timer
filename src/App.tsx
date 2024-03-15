import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clock from "./Pages/clock";
import Stoper from "./Pages/stoper";
import Timer from "./Pages/timer";
import Header from "./components/header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/Clock" element={<Clock />} />
        <Route path="/Stoper" element={<Stoper />} />
        <Route path="/Timer" element={<Timer />} />
      </Routes>
    </Router>
  );
};

export default App;
