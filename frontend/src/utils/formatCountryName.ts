export const formatCountryName = (countryName?: string) => {
  if (!countryName) return "";
  return countryName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
