import "../styles/componentsStyles/CityTopicsCards.css";
import type { City } from "../types/CityType";
import { Link } from "react-router-dom";

type Props = {
  city: City;
  countryId?: string;
};

export default function CityTopicsCards({ city }: Props) {
  return (
    <div className="city-topics-container">
      {city.topics?.map((topic) => (
        <Link
          key={topic.id}
          to={`/country/${city.countryId}/cities/${city.id}/articles/${topic.id}`}
          className="city-topic-card"
        >
          <img src={topic.cardImage} alt={topic.title} />
          <h2>{topic.title}</h2>
        </Link>
      ))}
    </div>
  );
}
