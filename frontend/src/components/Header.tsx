import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-container">
        <button className="home" onClick={() => navigate("/")}>
          HOME
        </button>
        <button
          className="country-btn lithuania"
          onClick={() => navigate("/country/lithuania")}
        >
          LITHUANIA
        </button>
        <button
          className="country-btn latvia"
          onClick={() => navigate("/country/latvia")}
        >
          LATVIA
        </button>
        <button
          className="country-btn estonia"
          onClick={() => navigate("/country/estonia")}
        >
          ESTONIA
        </button>
      </div>
    </header>
  );
}
