import CountryCard from "../components/CountryCard";
import Header from "../components/Header";
import { countries } from "../data/countries";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <>
      <Header />
      <div className="home-page">
        <h1>Welcome to the Explore Baltic States (EBS)</h1>
        <p className="intro-text">
          Dive into the magic of the Baltic region — a place where medieval
          streets meet modern culture, where nature feels untouched, and every
          city has its own story. Whether you're planning your first trip or
          already wandering through these countries, here you’ll find useful
          tips, local highlights, and curious facts to make your journey richer
          and easier.
        </p>
        <p className="path">Choose Your next destination:</p>

        <div className="cards-container">
          {countries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
