import { useNavigate, useParams } from "react-router-dom";
import { countries } from "../data/countries";
import type { Country } from "../types/CountryType";
import "../styles/CountryPage.css";
import Header from "../components/Header";
import CountryCardCarousel from "../components/CountryCardCarousel";
import { countryCardImgs } from "../data/countryCardImgs";

/*export default function CountryPage() {
  const navigate = useNavigate();
  const { countryName } = useParams<{ countryName: string }>();
  const country = countries.find(
    (c: Country) => c.name.toLowerCase() === countryName?.toLowerCase()
  );

  if (!country) {
    return <div> Country not found! </div>;
  }

  return (
    <>
      <Header />
      <div className="country-page">
        <h1>{country.name}</h1>
        <img src={country.flag} alt={`${country.name} flag`} />
        <p className="capital-city">
          <strong>Capital:</strong> {country.capital}
        </p>
        <p className="population">
          <strong>Population:</strong> {country.population}
        </p>
        <p>{country.description}</p>
        <section className="facts-section">
          <h3>Do you know that?</h3>
          <ul className="fact-list">
            {country.funFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </section>
        <button
          className="explore-btn"
          onClick={() => navigate(`/country/${countryName}/cities`)}
        >
          Explore cities
        </button>
        <button className="back-btn" onClick={() => navigate("/")}>
          Go back
        </button>
      </div>
    </>
  );
}*/

export default function CountryPage() {
  const navigate = useNavigate();
  const { countryName } = useParams<{ countryName: string }>();

  const country = countries.find(
    (c: Country) => c.name.toLowerCase() === countryName?.toLowerCase(),
  );

  if (!country) {
    return <div>Country not found!</div>;
  }

  const images = countryCardImgs[country.name] || [];

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <CountryCardCarousel
        images={images}
        title={country.name.toUpperCase()}
        subtitle={`Discover ${country.capital} and beyond`}
      />

      {/* CONTENT */}
      <div className="country-content">
        <div className="country-info">
          <div className="info-card">
            <h3>Capital</h3>
            <p>
              <b>{country.capital}</b>
            </p>
          </div>

          <div className="info-card">
            <h3>Population</h3>
            <p>
              <b>{country.population}</b>
            </p>
          </div>
        </div>

        <p className="country-description">{country.description}</p>

        <section className="facts-section">
          <h3>Did you know?</h3>

          <ul className="fact-list">
            {country.funFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </section>

        <button
          className="explore-btn"
          onClick={() => navigate(`/country/${countryName}/cities`)}
        >
          Explore Cities
        </button>
      </div>
    </>
  );
}
