import type { Country } from "../types/CountryType";

export const countries: Country[] = [
  {
    id: "lithuania",
    name: "Lithuania",
    flag: "/assets/images/flags/lithuania-flag.png",
    capital: "Vilnius",
    description:
      "Lithuania is a country in the Baltic region of Europe. It is bordered by Latvia to the north, Belarus to the east and south, Poland to the south, and the Baltic Sea to the west.",
    population: 2722289,
    funFacts: [
      "Lithuania was the first country to declare independence from the Soviet Union in 1990.",
      "The country has one of the oldest languages in Europe, Lithuanian, which is part of the Baltic language group.",
      "Basketball is the most popular sport in Lithuania, and the country has produced many successful players who have played in the NBA.",
    ],
    cities: [
      {
        id: "vilnius",
        name: "Vilnius",
        funFacts: [
          "Vilnius is known for its beautiful old town, which is a UNESCO World Heritage site.",
          "The city has a rich history, with influences from various cultures including Polish, Russian, and Jewish.",
        ],
        image: "/",
        description:
          "Vilnius is the capital and largest city of Lithuania, known for its well-preserved medieval architecture and vibrant cultural scene.",
        countryId: "lithuania",
      },
    ],
  },
  {
    id: "latvia",
    name: "Latvia",
    flag: "/assets/images/flags/latvia-flag.png",
    capital: "Riga",
    description:
      "Latvia is a country on the eastern shore of the Baltic Sea in Northern Europe. It is bordered by Estonia to the north, Lithuania to the south, Belarus to the southeast, and Russia to the east.",
    population: 1886198,
    funFacts: [
      "Latvia is known for its rich cultural heritage, including traditional folk music and dance.",
      "The country has a unique language, Latvian, which is one of the oldest languages in Europe still spoken today.",
      "Riga, the capital city, is famous for its Art Nouveau architecture and is a UNESCO World Heritage site.",
    ],
    cities: [
      {
        id: "riga",
        name: "Riga",
        funFacts: [
          "The city is known for its vibrant nightlife, with numerous bars, clubs, and restaurants.",
          "Riga's Old Town is home to many historical landmarks, including the House of Blackheads and St. Peter's Church.",
        ],
        image: "/",
        description:
          "Riga is the capital and largest city of Latvia, known for its historic center, vibrant nightlife, and beautiful architecture.",
        countryId: "latvia",
      },
    ],
  },
  {
    id: "estonia",
    name: "Estonia",
    flag: "/assets/images/flags/estonia-flag.png",
    capital: "Tallinn",
    description:
      "Estonia is a country in Northern Europe. It is bordered by the Gulf of Finland to the north, the Baltic Sea to the west, Latvia to the south, and Russia to the east.",
    population: 1326535,
    funFacts: [
      "Estonia is known for its advanced digital society, with many e-services and a high level of internet connectivity.",
      "The country has over 2,000 islands, with Saaremaa being the largest.",
      "Tallinn, the capital city, has a well-preserved medieval old town that is a UNESCO World Heritage site.",
    ],
    cities: [
      {
        id: "tallinn",
        name: "Tallinn",
        funFacts: [
          "Tallinn is known for its medieval architecture, with many buildings dating back to the 13th century.",
          "The city has a vibrant tech scene and is often referred to as the 'Silicon Valley of Europe'.",
          "Tallinn hosts the annual Tallinn Music Week, which showcases local and international artists.",
        ],
        image: "/",
        description:
          "Tallinn is the capital and largest city of Estonia, known for its medieval old town, vibrant culture, and digital innovation.",
        countryId: "estonia",
      },
    ],
  },
];
