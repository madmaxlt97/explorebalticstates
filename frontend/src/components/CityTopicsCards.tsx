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
      <Link
        to={`/country/${city.countryId}/cities/${city.id}/articles/${city.id}-airport`}
        className="city-topic-card"
      >
        <img
          src="/assets/images/topics-images/airport-topic-img.jpg"
          alt="airport"
        />

        <h2>Best way to get from airport to {city.name} center</h2>
      </Link>
      <Link
        to={`/country/${city.countryId}/cities/${city.id}/articles/${city.id}-hotels`}
        className="city-topic-card"
      >
        <img
          src="/assets/images/topics-images/hotel-topic-img.jpg"
          alt="hotel"
        />
        <h2>Best areas to stay in {city.name}</h2>
      </Link>
      <Link
        to={`/country/${city.countryId}/cities/${city.id}/articles/${city.id}-cuisine`}
        className="city-topic-card"
      >
        <img
          src="/assets/images/topics-images/cuisine-topic-img.jpg"
          alt="cuisine"
        />
        <h2>Best places to try national cuisine in {city.name}</h2>
      </Link>
    </div>
  );
}
