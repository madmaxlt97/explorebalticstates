import type { City } from "../types/CityType";
import { useNavigate } from "react-router-dom";

type Props = {
  city: City;
};

export default function CityCard({ city }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${city.countryId.toLowerCase()}/cities/${city.id}`);
  };
  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <p>{city.description}</p>
      <button onClick={handleClick}>Learn more...</button>
    </div>
  );
}
