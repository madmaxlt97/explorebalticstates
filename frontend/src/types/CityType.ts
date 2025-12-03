export type City = {
  id: string;
  image: string;
  name: string;
  description: string;
  funFacts: string[];
  countryId: string; // Added to link city to its country
};
