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
type FacilitiesOptions = {
  key: number;
  facility: string;
};
export default function ResultsDisplay(props: resultDisplayProps): JSX.Element {
  const [pricePerPersonOptions, setPricePerPersonOptions] = useState<
    PriceOption[]
  >([]);
  const [hotelFacOptions, setHotelFacOptions] = useState<FacilitiesOptions[]>(
    []
  );
  const [starRatingOptions, setStarRatingOptions] = useState<RatingOption[]>(
    []
  );
  const [priceSelected, setPriceSelected] = useState<PriceOption[]>([]);
  const [facSelected, setFacSelected] = useState<FacilitiesOptions[]>([]);
  const [rateSelected, setRateSelected] = useState<RatingOption[]>([]);
  const [resultData, setResultData] = useState<any>([]);

  useEffect(() => {
    if (props && Object.keys(props.searchResults).length) {
      const holidaysList = props.searchResults.holidays;
      console.log({ holidaysList });
      setResultData(holidaysList);
      let hotelFacList: string[] = [].concat.apply(
        [],
        holidaysList.map((item: any) => {
          return item.hotel.content.hotelFacilities;
        })
      );
      const hotelFac: string[] = [...new Set(hotelFacList)];
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
      let filteredResult: string[] = [];
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
    <div className={styles["container"]}>
      <div className={styles["grid"]}>
        <div className={styles["col"]}>
          <h1>Filter by...</h1>
          <h5>Price per person : </h5>
          <MultiSelect
            options={pricePerPersonOptions}
            displayValue={"description"}
            onSelect={updateBasedOnPrice}
            onRemove={updateBasedOnPrice}
          />
          <h5>Hotel Facilities : </h5>
          <MultiSelect
            options={hotelFacOptions}
            displayValue={"facility"}
            onSelect={updateBasedOnFac}
            onRemove={updateBasedOnFac}
          />
          <h5>Star Ratings: </h5>
          <MultiSelect
            options={starRatingOptions}
            displayValue={"rating"}
            onSelect={updateBasedOnRate}
            onRemove={updateBasedOnRate}
          />
        </div>
      </div>
      <div className={styles["card_container"]}>
        {resultData.length &&
          resultData.map((result) => {
            const featuresList = result.hotel.content.keyFeatures.filter(
              (val, index) => index <= 5
            );
            return (
              <div className={styles["card"]}>
                <img
                  className={styles["img"]}
                  src={result.hotel.content.images[0].MOBILE_MAIN.url}
                />

                <div className={styles["card_title"]}>{result.hotel.name}</div>
                <br />
                <br />
                <div className={styles["textDetails"]}>
                  <p>Key Features : </p>
                  <br />
                  {featuresList.map((key) => {
                    return <p>*{key.description}</p>;
                  })}
                </div>
                <div className={styles["buttonStyle"]}>
                  <ButtonComponent text="Add to Cart" type="SUBMIT" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
