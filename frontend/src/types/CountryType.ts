import type { City } from "./CityType";

export type Country = {
  id: string;
  name: string;
  flag: string;
  capital: string;
  population: string | number;
  description: string;
  funFacts: string[];
  cities: City[];
};
