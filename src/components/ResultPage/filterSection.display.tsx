import { h, JSX } from "preact";
import * as styles from "../result.display.module.less";
import {
  RatingOption,
  FacilitiesOptions,
  PriceOption,
} from "../../consts/search";

import { useState } from "preact/hooks";

export default function FilterSection(props) {
  const [priceSelected, setPriceSelected] = useState<PriceOption[]>([]);
  const [facSelected, setFacSelected] = useState<FacilitiesOptions[]>([]);
  const [rateSelected, setRateSelected] = useState<RatingOption[]>([]);
  const {
    pricePerPersonOptions,
    hotelFacOptions,
    starRatingOptions,
    getFinalResultData,
    holidaysData,
  } = props;

  const applyFilters = (priceData, facData, rateData) => {
    console.log({ holidaysData });
    if (holidaysData) {
      let results = holidaysData;
      if (priceData.length > 0) {
        let filteredResult: string[] = [];
        priceData.forEach((price) => {
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
      if (facData.length > 0) {
        let selectedFacility = [
          ...new Set(facData.map((item) => item.facility)),
        ];
        results = results.filter((result) => {
          const facilities = result.hotel.content.hotelFacilities;
          return selectedFacility.some((fac) => facilities.includes(fac));
        });
      }
      if (rateData.length > 0) {
        let selectedRating = [...new Set(rateData.map((item) => item.rating))];
        results = results.filter((result) => {
          return selectedRating.includes(result.hotel.content.starRating);
        });
      }
      getFinalResultData(results);
    }
  };

  const updateBasedOnFac = (selected) => {
    const selOp: any = facSelected.find(
      (fac) => fac.facility === selected.target.value
    );
    let currSel = facSelected;
    if (selOp === undefined) {
      //push the item;
      const currOp: any = hotelFacOptions.find(
        (hotelFac) => hotelFac.facility === selected.target.value
      );
      currSel.push(currOp);
    } else {
      currSel = facSelected.filter(
        (fac) => fac.facility !== selected.target.value
      );
    }
    setFacSelected(currSel);
    applyFilters(priceSelected, currSel, rateSelected);
  };

  const updateBasedOnPrice = (selected) => {
    const selOp: any = priceSelected.find(
      (priceVal) => priceVal.description === selected.target.value
    );
    let currSel = priceSelected;
    if (selOp === undefined) {
      //push the item;
      const currOp: any = pricePerPersonOptions.find(
        (priceVal) => priceVal.description === selected.target.value
      );
      currSel.push(currOp);
    } else {
      currSel = priceSelected.filter(
        (price) => price.description !== selected.target.value
      );
    }
    setPriceSelected(currSel);
    applyFilters(currSel, facSelected, rateSelected);
  };

  const updateBasedOnRate = (selected) => {
    const selOp: any = rateSelected.find(
      (rateVal) => rateVal.rating === selected.target.value
    );
    let currSel = rateSelected;
    if (selOp === undefined) {
      //push the item;
      const currOp: any = starRatingOptions.find(
        (rateVal) => rateVal.rating === selected.target.value
      );
      currSel.push(currOp);
    } else {
      currSel = rateSelected.filter(
        (ratVal) => ratVal.rating !== selected.target.value
      );
    }
    setRateSelected(currSel);
    applyFilters(priceSelected, facSelected, currSel);
  };
  return (
    <div className={styles["col"]}>
      <h1>Filter by...</h1>
      <h5>Price per person : </h5>
      {pricePerPersonOptions.map((price) => {
        return (
          <div className={styles["filter_text"]}>
            <input
              type="checkbox"
              id={price.description}
              name={price.description}
              value={price.description}
              checked={
                priceSelected.find(
                  (priceVal) => priceVal.description === price.description
                ) === undefined
                  ? false
                  : true
              }
              onChange={(price) => updateBasedOnPrice(price)}
            />
            {price.description}
          </div>
        );
      })}

      <h5>Hotel Facilities : </h5>
      {hotelFacOptions.map((hotel) => {
        return (
          <div className={styles["filter_text"]}>
            <input
              type="checkbox"
              id={hotel.facility}
              name={hotel.facility}
              value={hotel.facility}
              checked={
                facSelected.find(
                  (hotelVal) => hotelVal.facility === hotel.facility
                ) === undefined
                  ? false
                  : true
              }
              onChange={(fac) => updateBasedOnFac(fac)}
            />
            {hotel.facility}
          </div>
        );
      })}
      <h5>Star Ratings: </h5>
      {starRatingOptions.map((star) => {
        return (
          <div className={styles["filter_text"]}>
            <input
              type="checkbox"
              id={star.rating}
              name={star.rating}
              value={star.rating}
              checked={
                rateSelected.find((rate) => rate.rating === star.rating) ===
                undefined
                  ? false
                  : true
              }
              onChange={(str) => updateBasedOnRate(str)}
            />
            {star.rating} star
          </div>
        );
      })}
    </div>
  );
}
