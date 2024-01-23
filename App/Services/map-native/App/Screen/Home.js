import { View, Text } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import PlaceList from "../Components/Home/PlaceList";
import api from "../Category/api";
import { UserLocationContext } from "../Context/UserLocationContext";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const [location, setLocation] = useContext(UserLocationContext);

  useEffect(() => {
    GetNearBySearchPlace("coffee");
  }, [location]);

  const GetNearBySearchPlace = (value) => {
    if (location && location.coords) {
      console.log(value);
      api
        .nearByPlace(location.coords.latitude, location.coords.longitude, value)
        .then((resp) => {
          console.log(resp.data.results);
          setPlaceList(resp.data.results);
        });
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Header />
      <GoogleMapView placeList={placeList} />
      <CategoryList
        setSelectedCategories={(value) => GetNearBySearchPlace(value)}
      />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </View>
  );
}
