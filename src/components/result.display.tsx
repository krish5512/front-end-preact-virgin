import { h, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as styles from "./result.display.module.less";
import {
  RATINGS,
  PRICEPERPERSON,
  RatingOption,
  FacilitiesOptions,
  PriceOption,
} from "../consts/search";
import FilterSection from "./ResultPage/filterSection.display";
import ResultSection from "./ResultPage/resultSection.display";

interface resultDisplayProps {
  searchResults: any;
}

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

  const [resultData, setResultData] = useState<any>([]);
  useEffect(() => {
    if (props && Object.keys(props.searchResults).length) {
      const holidaysList = props.searchResults.holidays;
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

  const getFinalResultData = (data) => {
    setResultData(data);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["grid"]}>
        <FilterSection
          pricePerPersonOptions={pricePerPersonOptions}
          hotelFacOptions={hotelFacOptions}
          starRatingOptions={starRatingOptions}
          getFinalResultData={getFinalResultData}
          holidaysData={props.searchResults.holidays}
        />
      </div>
      <ResultSection resultData={resultData} />
    </div>
  );
}
