import { Option } from "../components/select.component";
import { RatingOption, PriceOption } from "../components/result.display";
export const LOCATIONS: Option[] = [
  {
    value: "new-york",
    description: "New York",
  },
  {
    value: "orlando",
    description: "Orlando",
  },
  {
    value: "barbados",
    description: "Barbados",
  },
  {
    value: "toronto",
    description: "Toronto",
  },
];

export const RATINGS: RatingOption[] = [
  {
    key: 1,
    rating: "1",
  },
  {
    key: 2,
    rating: "2",
  },
  {
    key: 3,
    rating: "3",
  },
  {
    key: 4,
    rating: "4",
  },
  {
    key: 5,
    rating: "5",
  },
];

export const PRICEPERPERSON: PriceOption[] = [
  {
    min: 0,
    max: 1880,
    description: "up to 1880",
  },
  {
    min: 1880,
    max: 2070,
    description: "1880-2070",
  },
  {
    min: 2070,
    max: 2510,
    description: "2070-2510",
  },
  {
    min: 2510,
    max: 10000000,
    description: "over 2510",
  },
];
