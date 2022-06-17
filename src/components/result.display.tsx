import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import MultiSelect from "multiselect-react-dropdown";
import * as styles from "./result.display.module.less";
import { ButtonComponent } from "./button.component";
import { RATINGS, PRICEPERPERSON } from "../consts/search";
// The filter options are these
// Price per person
// Hotel facilities
// Star rating

interface resultDisplayProps {
  searchResults: any;
}
export type RatingOption = {
  key: number;
  rating: string;
};
export type PriceOption = {
  min: number;
  max: number;
  description: string;
};
export default function ResultsDisplay(props: resultDisplayProps): JSX.Element {
  const [pricePerPersonOptions, setPricePerPersonOptions] = useState<
    PriceOption[]
  >([]);
  const [hotelFacOptions, setHotelFacOptions] = useState([]);
  const [starRatingOptions, setStarRatingOptions] = useState<RatingOption[]>(
    []
  );
  const [priceSelected, setPriceSelected] = useState<any>([]);
  const [facSelected, setFacSelected] = useState<any>([]);
  const [rateSelected, setRateSelected] = useState<any>([]);
  const [resultData, setResultData] = useState<any>([]);
  const resultHeaders = ["Name", "Place"];

  useEffect(() => {
    if (props && Object.keys(props.searchResults).length) {
      const holidaysList = props.searchResults.holidays;
      setResultData(holidaysList);

      let hotelFacList: any = [].concat.apply(
        [],
        holidaysList.map((item: any, key) => {
          return item.hotel.content.hotelFacilities;
        })
      );
      const hotelFac: any = [...new Set(hotelFacList)];

      const finalFacilityOptions = hotelFac.map((item, key) => {
        return { key: key, facility: item };
      });
      setPricePerPersonOptions(PRICEPERPERSON);
      setHotelFacOptions(finalFacilityOptions);
      setStarRatingOptions(RATINGS);
    }
  }, [props.searchResults]);

  const applyFilters = () => {
    let results = props.searchResults.holidays;
    if (priceSelected.length > 0) {
      let filteredResult: any = [];
      priceSelected.forEach((price) => {
        let option = results.filter((result) => {
          return (
            result.pricePerPerson > price.min &&
            result.pricePerPerson <= price.max
          );
        });
        filteredResult.push(option);
      });
      results = [].concat.apply([], filteredResult);
    }
    if (facSelected.length > 0) {
      let selectedFacility = [
        ...new Set(facSelected.map((item) => item.facility)),
      ];
      results = results.filter((result) => {
        const facilities = result.hotel.content.hotelFacilities;
        return selectedFacility.some((fac) => facilities.includes(fac));
      });
    }
    if (rateSelected.length > 0) {
      let selectedRating = [
        ...new Set(rateSelected.map((item) => item.rating)),
      ];
      results = results.filter((result) => {
        return selectedRating.includes(result.hotel.content.starRating);
      });
    }
    setResultData(results);
  };
  const updateBasedOnPrice = (e) => {
    setPriceSelected(e);
    applyFilters();
  };
  const updateBasedOnFac = (e) => {
    setFacSelected(e);
    applyFilters();
  };
  const updateBasedOnRate = (e) => {
    setRateSelected(e);
    applyFilters();
  };

  return (
    <div>
      <h1>Filters</h1>
      <div className={styles["grid"]}>
        <div className={styles["col"]}>
          <h3>Price per person : </h3>
          <MultiSelect
            options={pricePerPersonOptions}
            displayValue={"description"}
            onSelect={updateBasedOnPrice}
            onRemove={updateBasedOnPrice}
          />
        </div>
        <div className={styles["col"]}>
          <h3>Hotel Facilities : </h3>
          <MultiSelect
            options={hotelFacOptions}
            displayValue={"facility"}
            onSelect={updateBasedOnFac}
            onRemove={updateBasedOnFac}
          />
        </div>
        <div className={styles["col"]}>
          <h3>Star Ratings: </h3>
          <MultiSelect
            options={starRatingOptions}
            displayValue={"rating"}
            onSelect={updateBasedOnRate}
            onRemove={updateBasedOnRate}
          />
        </div>
      </div>
      <div className={styles["grid"]}>
        {resultHeaders.map((header) => {
          return (
            <div className={styles["col"]}>
              <h3> {header}</h3>
            </div>
          );
        })}
      </div>
      {resultData.length &&
        resultData.map((result) => {
          return (
            <div className={styles["grid"]}>
              <div className={styles["col"]}>{result.hotel.name}</div>
              <div className={styles["col"]}>
                {result.hotel.content.parentLocation}
              </div>
            </div>
          );
        })}
    </div>
  );
}
