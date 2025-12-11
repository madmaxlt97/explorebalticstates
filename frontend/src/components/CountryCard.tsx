import type { Country } from "../types/CountryType";
import { useNavigate } from "react-router-dom";
import "../styles/Card.css";

type Props = {
  country: Country;
};

export default function CountryCard({ country }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${country.name.toLowerCase()}`);
  };

  return (
    <div className="country-card">
      <img src={country.flag} alt={`${country.name} flag`} />
      <h3>{country.name}</h3>
      <p className="country-meta">Capital: {country.capital}</p>
      <p className="country-meta">Population: {country.population}</p>
      {/* <p>{country.description}</p>*/}
      <button onClick={handleClick} className="card-btn">
        Learn more →
      </button>
    </div>
  );
}
