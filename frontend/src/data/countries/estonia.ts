import type { City } from "../../types/CityType";

export const estoniaCities: City[] = [
  {
    id: "tallinn",
    countryId: "estonia",
    name: "Tallinn",
    image: "",
    description: "",
    funFacts: [],
    topics: [
      {
        id: "tallinn-airport",
        title: "Best way to get from airport to Tallinn center",
        cardImage: "/assets/images/topics-images/airport-topic-img.jpg",
      },
      {
        id: "tallinn-hotels",
        title: "Best areas to stay in Tallinn",
        cardImage: "/assets/images/topics-images/hotel-topic-img.jpg",
      },
      {
        id: "tallinn-cuisine",
        title: "Best places to try national cuisine in Vilnius",
        cardImage: "/assets/images/topics-images/cuisine-topic-img.jpg",
      },
    ],
  },
  {
    id: "tartu",
    countryId: "estonia",
    name: "Tartu",
    image: "",
    description: "",
    funFacts: [],
    topics: [
      {
        id: "tartu-airport",
        title: "Best way to get from airport to Tartu center",
        cardImage: "/assets/images/topics-images/airport-topic-img.jpg",
      },
      {
        id: "tartu-hotels",
        title: "Best areas to stay in Tartu",
        cardImage: "/assets/images/topics-images/hotel-topic-img.jpg",
      },
      {
        id: "tartu-cuisine",
        title: "Best places to try national cuisine in Tartu",
        cardImage: "/assets/images/topics-images/cuisine-topic-img.jpg",
      },
    ],
  },
];
