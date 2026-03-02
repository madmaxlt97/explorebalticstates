//import CountryCard from "../components/CountryCard";
import Header from "../components/Header";
import { Link } from "react-router-dom";
//import { countries } from "../data/countries";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <>
      <Header />
      <div className="home-page">
        <h1>CHOOSE YOUR DESTINATION</h1>
        {/*<h1>Welcome to the Explore Baltic States (EBS)</h1>
        <p className="intro-text">
          Dive into the magic of the Baltic region — a place where medieval
          streets meet modern culture, where nature feels untouched, and every
          city has its own story. Whether you're planning your first trip or
          already wandering through these countries, here you’ll find useful
          tips, local highlights, and curious facts to make your journey richer
          and easier.
        </p>
        <p className="path">Choose Your next destination:</p>*/}

        <div className="cards-container">
          <Link to="/country/lithuania" className="card-btn">
            <div className="country lt"></div>
          </Link>
          <Link to="/country/latvia" className="card-btn">
            <div className="country lv"></div>
          </Link>
          <Link to="/country/estonia" className="card-btn">
            <div className="country ee"></div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
