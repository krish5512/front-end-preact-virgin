import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import MultiSelect from "multiselect-react-dropdown";
import { default as ReactSelect } from "react-select";
import Option from "../assets/multiselect/Options";
import * as styles from "./result.display.module.less";
import { ButtonComponent } from "./button.component";
import { RATINGS, PRICEPERPERSON } from "../consts/search";

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
  const [optionSelected, setOptionSelected] = useState<PriceOption[]>([]);
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
  const updateBasedOnFac = (selected) => {
    applyFilters();
    console.log(selected.target.value, priceSelected);
    const selOp: any = facSelected.find(
      (fac) => fac.facility === selected.target.value
    );
    console.log(selOp);
    let currSel = facSelected;
    if (selOp === undefined) {
      //push the item;
      const currOp: any = hotelFacOptions.find(
        (hotelFac) => hotelFac.facility === selected.target.value
      );

      console.log(currOp);
      currSel.push(currOp);
    } else {
      currSel = facSelected.filter(
        (fac) => fac.facility !== selected.target.value
      );
    }
    console.log({ currSel });
    setFacSelected(currSel);
    setOptionSelected(selected);
  };
  const updateBasedOnRate = (e) => {
    setRateSelected(e);
    console.log({ e });
    applyFilters();
  };
  const handleChange = (selected) => {
    console.log(selected.target.value, priceSelected);
    const selOp: any = priceSelected.find(
      (priceVal) => priceVal.description === selected.target.value
    );
    console.log(selOp);
    let currSel = priceSelected;
    if (selOp === undefined) {
      //push the item;
      const currOp: any = pricePerPersonOptions.find(
        (priceVal) => priceVal.description === selected.target.value
      );

      console.log(currOp);
      currSel.push(currOp);
    } else {
      currSel = priceSelected.filter(
        (price) => price.description !== selected.target.value
      );
    }
    console.log({ currSel });
    setPriceSelected(currSel);
    setOptionSelected(selected);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["grid"]}>
        <div className={styles["col"]}>
          <h1>Filter by...</h1>
          <h5>Price per person : </h5>
          {/* <MultiSelect
            options={pricePerPersonOptions}
            displayValue={"description"}
            onSelect={updateBasedOnPrice}
            onRemove={updateBasedOnPrice}
          /> */}
          {pricePerPersonOptions.map((price) => {
            return (
              <div>
                <input
                  type="checkbox"
                  id={price.description}
                  name={price.description}
                  value={price.description}
                  checked={priceSelected.find(
                    (priceVal) => priceVal.description === price.description
                  )}
                  onChange={(price) => handleChange(price)}
                />
                {price.description}
              </div>
            );
          })}

          <h5>Hotel Facilities : </h5>
          {/* <MultiSelect
            options={hotelFacOptions}
            displayValue={"facility"}
            onSelect={updateBasedOnFac}
            onRemove={updateBasedOnFac}
          /> */}
          {hotelFacOptions.map((hotel) => {
            return (
              <div>
                <input
                  type="checkbox"
                  id={hotel.key}
                  name={hotel.facility}
                  value={hotel.facility}
                  checked={facSelected.find(
                    (hotelVal) => hotelVal.facility === hotel.facility
                  )}
                  onChange={(fac) => updateBasedOnFac(fac)}
                />
                {hotel.facility}
              </div>
            );
          })}
          <h5>Star Ratings: </h5>
          <MultiSelect
            options={starRatingOptions}
            displayValue={"rating"}
            onSelect={updateBasedOnRate}
            onRemove={updateBasedOnRate}
          />
          <ReactSelect
            options={pricePerPersonOptions}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{
              Option,
            }}
            onChange={handleChange}
            displayValue={"description"}
            allowSelectAll={true}
            value={optionSelected}
          />
        </div>
      </div>
      <div className={styles["result_Container"]}>
        <div className={styles["result_Count"]}>
          <h3>{resultData.length} holidays found.</h3>
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
                  <div className={styles["card_body"]}>
                    <div className={styles["card_title"]}>
                      {result.hotel.name}
                    </div>
                    <div className={styles["card_text"]}>
                      {result.hotel.content.starRating ? (
                        <p> Rating : {result.hotel.content.starRating} stars</p>
                      ) : (
                        <p> Rating : No rating</p>
                      )}
                    </div>
                    <div className={styles["card_text"]}>
                      {result.pricePerPerson ? (
                        <p> Price Per Person : {result.pricePerPerson}</p>
                      ) : (
                        <p> No Pricing provided</p>
                      )}
                    </div>
                    <div className={styles["card_text"]}>
                      {result.hotel.content.hotelDescription ? (
                        result.hotel.content.hotelDescription.length > 250 ? (
                          <p>
                            Hotel Description :
                            {`  ` +
                              result.hotel.content.hotelDescription.substring(
                                0,
                                250
                              )}
                            ....<a href="#">Read more</a>
                          </p>
                        ) : (
                          <p>
                            Hotel Description :
                            {`  ` + result.hotel.content.hotelDescription}
                          </p>
                        )
                      ) : (
                        <p> Hotel Description : No Description provided</p>
                      )}
                    </div>
                    <div className={styles["textDetails"]}>
                      <p>Key Features : </p>
                      <br />
                      {featuresList.map((key) => {
                        return <p>*{key.description}</p>;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
