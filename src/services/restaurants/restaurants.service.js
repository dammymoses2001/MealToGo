import { mocks } from "./mock";
import camelize from "camelize";
export const restaurantsRequest = (location = "51.219448,4.402464") => {
  //   console.log(mocks[location]);
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not Found");
    }
    resolve(mock);
  });
};

const restaurantTransorm = ({ results = [] }) => {
  //transform:- add or change Data come through
  const mappedResult = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant?.opening_hours?.open_now,
      isClosedTemporarily: restaurant?.business_status !== "OPERATIONAL",
    };
  });
  return camelize(mappedResult);
};
restaurantsRequest()
  .then(restaurantTransorm)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
