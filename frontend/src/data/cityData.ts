export interface Topic {
  id: string;
  title: string;
  img: string;
}

export interface City {
  id: string;
  countryId: string;
  name: string;
  topics: Topic[];
}

export const cities: City[] = [
  {
    id: "vilnius",
    countryId: "lithuania",
    name: "Vilnius",
    topics: [
      {
        id: "vilnius-airport",
        title: "Best way to get from airport to Vilnius center",
        img: "/assets/images/topics-images/airport-topic-img.jpg",
      },
      {
        id: "vilnius-hotels",
        title: "Best areas to stay in Vilnius",
        img: "/assets/images/topics-images/hotel-topic-img.jpg",
      },
      {
        id: "vilnius-cuisine",
        title: "Best places to try national cuisine in Vilnius",
        img: "/assets/images/topics-images/cuisine-topic-img.jpg",
      },
      {
        id: "vilnius-new-year-activities",
        title:
          "A Winter Fairytale: Your Ultimate New Year's Getaway to Vilnius",
        img: "/assets/images/topics-images/airport-topic-img.jpg",
      },
    ],
  },
];
