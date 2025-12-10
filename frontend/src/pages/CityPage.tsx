import { useParams, useNavigate } from "react-router-dom";

import { lithuaniaCities } from "../data/countries/lithuania";
import { latviaCities } from "../data/countries/latvia";
import { estoniaCities } from "../data/countries/estonia";
import type { City } from "../types/CityType";
import CityTopicsCards from "../components/CityTopicsCards";
import "../styles/CityPage.css";
import Header from "../components/Header";

const CityPage = () => {
  const { countryName, cityId } = useParams();

  const navigate = useNavigate();

  let allCities: City[] = [];
  switch (countryName) {
    case "lithuania":
      allCities = lithuaniaCities;
      break;
    case "latvia":
      allCities = latviaCities;
      break;
    case "estonia":
      allCities = estoniaCities;
      break;
    default:
      allCities = [];
  }

  const city = allCities.find((city) => city.id === cityId);

  if (!city) {
    return <h2>City not found</h2>;
  }

  return (
    <>
      <Header />
      <div className="city-page-container">
        <div className="city-page">
          <h1 className="city-name">{city.name}</h1>
          <p className="city-description">{city.description}</p>
        </div>
        <div className="city-topics">
          <CityTopicsCards city={city} />
        </div>
        <button
          className="back-btn"
          onClick={() => navigate(`/country/${countryName}/cities`)}
        >
          Go back
        </button>
        <button className="btn-to-main-page" onClick={() => navigate(`/`)}>
          Go to main page
        </button>
      </div>
    </>
  );
};

export default CityPage;
