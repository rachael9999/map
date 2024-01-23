import axios from "axios";
import { GOOGLE_MAPS_API_KEY } from "@env";

const BaseUrl = "https://maps.googleapis.com/maps/api/place";

const api_key = GOOGLE_MAPS_API_KEY;

const nearByPlace = (lat, lng, type) =>
  console.log(
    `${BaseUrl}/nearbysearch/json?location=${lat},${lng}&radius=1500&type=${type}&key=${api_key}`
  );
axios.get(
  `${BaseUrl}/nearbysearch/json?location=${lat},${lng}&radius=1500&type=${type}&key=${api_key}`
);

export default {
  nearByPlace,
};
