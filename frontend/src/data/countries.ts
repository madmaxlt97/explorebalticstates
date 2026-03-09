import type { Country } from "../types/CountryType";

export const countries: Country[] = [
  {
    id: "lithuania",
    name: "Lithuania",
    flag: "/assets/images/flags/lithuania-flag.png",
    capital: "Vilnius",
    description:
      "In Lithuania, the echoes of ancient folklore meet the pulse of a high-tech future. It’s a land where the legend of the Iron Wolf still inspires the dreamers of today, and where the reverence for nature is just as strong as the drive for innovation. This is a country that doesn't just exist—it endures and inspires.",
    population: "2.8M",
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
        topics: [],
      },
    ],
  },
  {
    id: "latvia",
    name: "Latvia",
    flag: "/assets/images/flags/latvia-flag.png",
    capital: "Riga",
    description:
      "There is an effortless, northern elegance to Latvia, most visible in the swirling Art Nouveau carvings that adorn its capital. It is a country that feels like a living museum, where medieval history and cosmopolitan flair coexist peacefully under the watchful eye of a wild, untamed Baltic spirit.",
    population: "1.8M",
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
        topics: [],
      },
    ],
  },
  {
    id: "estonia",
    name: "Estonia",
    flag: "/assets/images/flags/estonia-flag.png",
    capital: "Tallinn",
    description:
      "In Estonia, silence is a national treasure. It’s a land of misty bogs, ancient meteor craters, and thousands of islands where the connection to nature remains sacred. It is a nation that famously sang its way to freedom, proving that a small voice, when harmonized, can move mountains and change history.",
    population: "1.3M",
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
        topics: [],
      },
    ],
  },
];
