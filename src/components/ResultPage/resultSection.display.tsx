import { h, JSX } from "preact";
import * as styles from "../result.display.module.less";

export default function ResultSection(props) {
  const { resultData } = props;
  return (
    <div className={styles["result_Container"]}>
      <div className={styles["result_Count"]}>
        <h3>{resultData.length} holidays found.</h3>
      </div>
      <div className={styles["card_container"]}>
        {resultData.length > 0 &&
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
  );
}
