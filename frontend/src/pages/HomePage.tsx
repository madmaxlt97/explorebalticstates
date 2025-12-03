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
          Our main mission is to help You find useful info, fun facts and travel
          tips before or during visit of this very interesting region of Europe.
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
