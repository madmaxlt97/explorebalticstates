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
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>{country.description}</p>
      <button onClick={handleClick}>Learn more...</button>
    </div>
  );
}
