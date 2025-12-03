import type { City } from "../types/CityType";

export const estoniaCities: City[] = [
  {
    id: "tallinn",
    image: "/assets/images/cities/estcities/tallinn/tallinn1.jpg",
    name: "Tallinn",
    description:
      "The capital city of Estonia, known for its well-preserved medieval architecture.",
    funFacts: [
      "Tallinn's Old Town is a UNESCO World Heritage Site.",
      "The city has a vibrant tech scene and is often referred to as 'e-Estonia'.",
      "Tallinn hosts the annual Tallinn Music Week, one of the largest music festivals in Northern Europe.",
    ],
    countryId: "estonia",
  },
  {
    id: "tartu",
    image: "/assets/images/cities/estcities/tartu/tartu1.jpg",
    name: "Tartu",
    description:
      "Known as the intellectual capital of Estonia, home to the country's oldest university.",
    funFacts: [
      "Tartu University was founded in 1632.",
      "The city is famous for its student culture and lively atmosphere.",
      "Tartu was designated a European Capital of Culture in 2024.",
    ],
    countryId: "estonia",
  },
];
