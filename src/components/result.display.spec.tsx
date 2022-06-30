import { h } from "preact";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";
import FilterSection from "./ResultPage/filterSection.display";
import { RATINGS, PRICEPERPERSON, FACILITIES } from "../consts/search";
configure({ adapter: new Adapter() });

describe("FilterComponent", () => {
  const resultObj = [
    {
      totalPrice: 5102.82,
      pricePerPerson: 2551.41,
      depositPerPerson: 2551.41,
      webDiscount: 0,
      deposit: 5102.82,
      hotel: {
        id: "H1097",
        name: "Tamarind by Elegant Hotels",
        boardBasis: "All Inclusive",
        content: {
          name: "Tamarind by Elegant Hotels",
          virginView:
            "Situated on an idyllic 750ft crescent of beach on the Platinum West Coast of Barbados, Elegant Hotels proudly re-introduce Tamarind. A fusion of Mediterranean warmth and Caribbean spirit coupled with serene outdoor spaces give it a distinctive personality. It is a perfect holiday destination for couples, honeymooners and families seeking a stylish retreat. There&#x2019;s an array of complimentary water sports and activities for all ages, kids' club, family lounge, fitness centre, an intimate spa and relaxation pool (adults only) and access to acclaimed golfing nearby. Culinary experiences include the Taste of Asia, 246 Fridays and Caribbean Buffet Nights, and a series of Chef-inspired A La Carte menu options with live entertainment 5 days a week.",
          telephoneBookableOnly: false,
          vRating: "4+",
          hotelDescription:
            "Situated on an idyllic 750 ft crescent of white sandy beach on the Platinum West Coast, Tamarind is a fusion of Mediterranean warmth and Caribbean spirit. With complimentary water sports, activities for all ages, kids' club, family lounge, fitness centre, three pools and an intimate spa and relaxation pool for adults only, it's a perfect holiday destination for couples, honeymooners and families seeking a stylish retreat.",
          atAGlance: [
            "On a 750 ft stretch of pristine white sand beach",
            "All-inclusive",
            "Complimentary motorized and non-motorized water sports",
            "3 pools",
            "Flying Fish Kids Club and Teens Den",
          ],
          location: {
            lat: 13.162786,
            lon: -59.63752,
          },
          parentLocation: "Barbados, Caribbean",
          images: [
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-1-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/27668/27668-1-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-2-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/27668/27668-2-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-3-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/27668/27668-3-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-4-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/27668/27668-4-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-5-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/27668/27668-5-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-6-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/27668/27668-6-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-7-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-7-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-8-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/27668/27668-8-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-9-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/27668/27668-9-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-10-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/27668/27668-10-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-11-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-11-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-12-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-12-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-13-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-13-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-14-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-14-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-15-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-15-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-16-results_carousel.jpg?version=28",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-16-mobile_main.jpg?version=28",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-17-results_carousel.jpg?version=4",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-17-mobile_main.jpg?version=4",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-18-results_carousel.jpg?version=4",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-18-mobile_main.jpg?version=4",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-19-results_carousel.jpg?version=4",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-19-mobile_main.jpg?version=4",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-20-results_carousel.jpg?version=4",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-20-mobile_main.jpg?version=4",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-21-results_carousel.jpg?version=4",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/27668/27668-21-mobile_main.jpg?version=4",
              },
              IMAGE_DESCRIPTION: "",
            },
          ],
          keyFeatures: [
            {
              description: "Internet Access",
              name: "internet-access",
            },
            {
              description: "Restaurant",
              name: "restaurant",
            },
            {
              description: "Wheelchair access",
              name: "wheelchair-access",
            },
            {
              description: "Beachfront location",
              name: "beachfront-location",
            },
            {
              description: "Kids Club",
              name: "kids-club",
            },
            {
              description: "Bar",
              name: "bar",
            },
            {
              description: "Fitness Centre/Gym",
              name: "fitness-centre-gym",
            },
            {
              description: "Spa",
              name: "spa",
            },
            {
              description: "Honeymoon",
              name: "honeymoon",
            },
            {
              description: "Wedding",
              name: "wedding",
            },
            {
              description: "Room Service",
              name: "room-service",
            },
            {
              description: "Safety Deposit Box",
              name: "safety-deposit-box",
            },
            {
              description: "Families",
              name: "families",
            },
          ],
          urlName: "tamarind-by-elegant-hotels",
          url: "/caribbean/barbados/tamarind-by-elegant-hotels",
          parentUrlName: "barbados",
          holidayType: ["Beach Holiday", "Wedding", "Families", "Honeymoon"],
          boardBasis: ["Bed and Breakfast"],
          hotelLocation: ["Beachfront location"],
          accommodationType: ["Room"],
          hotelFacilities: [
            "Restaurant",
            "Bar",
            "Spa",
            "Room Service",
            "Safety Deposit Box",
            "Fitness Centre/Gym",
            "Internet Access",
          ],
          familyKids: ["Kids Club"],
          activities: [],
          features: ["Wheelchair access"],
          starRating: "5",
          resortFees: false,
          video: {
            url: "//www.youtube.com/embed/qzK1VJB1d0E",
            preview: "//img.youtube.com/vi/qzK1VJB1d0E/0.jpg",
          },
          salesMessages: [],
          propertyType: "Hotel",
          hotelEdits: [],
        },
        tripAdvisor: {
          numReviews: 1537,
          ratingImageUrl:
            "//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11619-5.svg",
        },
      },
      outboundFlight: {
        airline: "VS",
        airlineName: "Virgin Atlantic",
        cabinClass: "economy classic",
        departureAirport: "London Heathrow",
        departureAirportCode: "LHR",
        arrivalAirport: "Barbados Airport",
        arrivalAirportCode: "BGI",
        sectors: [
          {
            airline: "VS",
            airlineName: "Virgin Atlantic",
            cabinClass: "economy classic",
            flightNumber: "177",
            stops: 0,
            operatingAirline: "VS",
            operatingAirlineName: "Virgin Atlantic",
            from: "2022-07-07T09:20:00",
            to: "2022-07-07T13:20:00",
            departureAirport: "London Heathrow",
            departureAirportCode: "LHR",
            arrivalAirport: "Barbados Airport",
            arrivalAirportCode: "BGI",
          },
        ],
      },
      inboundFlight: {
        airline: "VS",
        airlineName: "Virgin Atlantic",
        cabinClass: "economy classic",
        departureAirport: "Barbados Airport",
        departureAirportCode: "BGI",
        arrivalAirport: "London Heathrow",
        arrivalAirportCode: "LHR",
        sectors: [
          {
            airline: "VS",
            airlineName: "Virgin Atlantic",
            cabinClass: "economy classic",
            flightNumber: "178",
            stops: 0,
            operatingAirline: "VS",
            operatingAirlineName: "Virgin Atlantic",
            from: "2022-07-14T21:35:00",
            to: "2022-07-15T11:10:00",
            departureAirport: "Barbados Airport",
            departureAirportCode: "BGI",
            arrivalAirport: "London Heathrow",
            arrivalAirportCode: "LHR",
          },
        ],
      },
      locationWidened: false,
      virginPoints: 10206,
      tierPoints: 200,
      departureDate: "2022-07-07",
      selectedDate: "2022-07-07",
    },
  ];
  it("should display the filter correctly", async () => {
    const filter_component = mount(
      <FilterSection
        pricePerPersonOptions={PRICEPERPERSON}
        hotelFacOptions={FACILITIES}
        starRatingOptions={RATINGS}
        getFinalResultData={() => null}
        holidaysData={resultObj}
      />
    );

    expect(
      filter_component.find("input").forEach((node) => {
        expect(node.props().checked).toEqual(false);
      })
    );
  });
});
