import { h, JSX } from "preact";
import { useRouter } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import SearchComponent from "../components/search.component";
import { doRequest } from "../services/http.service";
import { BookingRequest, BookingResponse } from "../types/booking";
import { DateTime } from "luxon";
import ResultsDisplay from "../components/result.display";
import * as styles from "../components/result.display.module.less";

export default function ResultsRoute(): JSX.Element {
  const [searchParams] = useRouter();
  const [searchResults, setSearchResults] = useState<any>({});
  const [loader, setLoader] = useState<boolean>(true);
  useEffect(() => {
    const departureDate = DateTime.fromFormat(
      searchParams?.matches?.departureDate,
      "yyyy-MM-dd"
    ).toFormat("dd-MM-yyyy");
    const requestBody: BookingRequest = {
      bookingType: "holiday",
      location: searchParams?.matches?.location,
      departureDate: departureDate,
      duration: searchParams?.matches?.duration as unknown as number,
      gateway: "LHR",
      partyCompositions: [
        {
          adults: searchParams?.matches?.adults as unknown as number,
          childAges: [],
          infants: 0,
        },
      ],
    };
    setLoader(true);
    doRequest("POST", "/cjs-search-api/search", requestBody).then(
      (response: unknown | BookingResponse) => {
        // Results are loaded here
        setSearchResults(response);
        setLoader(false);
      }
    );
  }, [searchParams]);

  return (
    <section>
      <SearchComponent />
      {loader ? (
        <div className={styles["loader"]} />
      ) : (
        <ResultsDisplay searchResults={searchResults} />
      )}
    </section>
  );
}
