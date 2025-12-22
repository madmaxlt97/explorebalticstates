import type { City } from "../../types/CityType";

export const latviaCities: City[] = [
  {
    id: "riga",
    countryId: "latvia",
    name: "Riga",
    image: "",
    description: "",
    funFacts: [],
    topics: [
      {
        id: "riga-airport",
        title: "Best way to get from airport to Riga center",
        cardImage: "/assets/images/topics-images/airport-topic-img.jpg",
      },
      {
        id: "riga-hotels",
        title: "Best areas to stay in Riga",
        cardImage: "/assets/images/topics-images/hotel-topic-img.jpg",
      },
      {
        id: "riga-cuisine",
        title: "Best places to try national cuisine in Riga",
        cardImage: "/assets/images/topics-images/cuisine-topic-img.jpg",
      },
      {
        id: "riga-new-year-activities",
        title: "New Year's Eve in Riga: Celebration Guide",
        cardImage: "/assets/images/topics-images/latvia/riga/riga-new-year.png",
      },
    ],
  },
  {
    id: "jurmala",
    countryId: "latvia",
    name: "Jurmala",
    image: "",
    description: "",
    funFacts: [],
    topics: [
      {
        id: "jurmala-airport",
        title: "Best way to get from airport to Jūrmala center",
        cardImage: "/assets/images/topics-images/airport-topic-img.jpg",
      },
      {
        id: "jurmala-hotels",
        title: "Best areas to stay in Jūrmala",
        cardImage: "/assets/images/topics-images/hotel-topic-img.jpg",
      },
      {
        id: "jurmala-cuisine",
        title: "Best places to try national cuisine in Jūrmala",
        cardImage: "/assets/images/topics-images/cuisine-topic-img.jpg",
      },
    ],
  },
];
