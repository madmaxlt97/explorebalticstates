import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-logo">
          EBS
        </Link>

        <div className="nav-links">
          {/* <Link to="/">Home</Link> */}
          <Link to="/country/lithuania">Lithuania</Link>
          <Link to="/country/latvia">Latvia</Link>
          <Link to="/country/estonia">Estonia</Link>
        </div>
      </nav>
    </header>
  );
}
