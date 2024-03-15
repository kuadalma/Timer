import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="NavCon">
      <button className="NavBtn" onClick={() => navigate("/")}>
        CLOCK
      </button>
      <button className="NavBtn" onClick={() => navigate("/timer")}>
        TIMER
      </button>
      <button className="NavBtn" onClick={() => navigate("/stoper")}>
        STOPER
      </button>
    </header>
  );
};

export default Header;
