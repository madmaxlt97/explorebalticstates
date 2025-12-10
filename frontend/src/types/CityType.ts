export interface Topic {
  id: string;
  title: string;
  cardImage: string;
}

export interface City {
  id: string;
  countryId: string;
  name: string;
  image: string;
  description: string;
  funFacts: string[];
  topics: Topic[];
}
