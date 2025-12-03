import { useParams, Link, useNavigate } from "react-router-dom";
import { lithuaniaCities } from "../data/lithuaniaCities";
import { latviaCities } from "../data/latviaCities";
import { estoniaCities } from "../data/estoniaCities";
import type { City } from "../types/CityType";
import { formatCountryName } from "../utils/formatCountryName.ts";

import "../styles/CitiesPage.css";
import Header from "../components/Header.tsx";

export default function CitiesPage() {
  const { countryName } = useParams();
  const formattedCountryName = formatCountryName(countryName);
  const navigate = useNavigate();

  let countryCities: City[] = [];

  switch (countryName) {
    case "lithuania":
      countryCities = lithuaniaCities;
      break;
    case "latvia":
      countryCities = latviaCities;
      break;
    case "estonia":
      countryCities = estoniaCities;
      break;
    default:
      countryCities = [];
  }
  return (
    <>
      <Header />
      <div className="cities-page">
        <h1>Cities of {formattedCountryName}</h1>

        <div className="city-cards-container">
          {countryCities.map((city) => (
            <div className="city-card" key={city.id}>
              <img
                src={city.image}
                alt={city.name}
                className="city-img"
                loading="lazy"
              />
              <h2>{city.name}</h2>
              <p>{city.description}</p>

              <button
                className="explore-btn"
                onClick={() =>
                  navigate(`/country/${countryName}/cities/${city.id}`)
                }
              >
                Explore
              </button>
            </div>
          ))}
        </div>
        <button
          className="back-btn"
          onClick={() => navigate(`/country/${countryName}`)}
        >
          Go back
        </button>
        <button className="btn-to-main-page" onClick={() => navigate(`/`)}>
          Go to main page
        </button>
      </div>
    </>
  );
}
