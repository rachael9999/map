import { View, StyleSheet, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState, useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

export default function GoogleMapView({ placeList }) {
  const [mapRegion, setmapRegion] = useState(null);
  const mapRef = useRef(null);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    console.log("location", location);
    if (location) {
      setmapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  }, [location]);

  const goToMyLocation = () => {
    console.log("goToMyLocation");
    if (location && mapRef.current) {
      const newRegion = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };
      mapRef.current.animateToRegion(newRegion);
    }
  };

  const zoomIn = () => {
    setmapRegion((prevRegion) => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta / 2,
      longitudeDelta: prevRegion.longitudeDelta / 2,
    }));
  };

  const zoomOut = () => {
    setmapRegion((prevRegion) => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta * 2,
      longitudeDelta: prevRegion.longitudeDelta * 2,
    }));
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
          fontWeight: "600",
        }}
      >
        Top Near By Places
      </Text>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
        onRegionChangeComplete={(region) => setmapRegion(region)}
      />

      {/*need to put buttons outside mapview components so that it can get the
      touch events*/}
      <View style={styles.myLocationContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            goToMyLocation();
          }}
        >
          <MaterialIcons name="my-location" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.zoomButtonsContainer}>
        <TouchableOpacity style={styles.button} onPress={zoomIn}>
          <Entypo name="plus" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={zoomOut}>
          <Entypo name="minus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("screen").width * 0.9,
    height: Dimensions.get("screen").height * 0.3,
    borderRadius: 15,
  },
  myLocationContainer: {
    position: "absolute",
    top: "15%",
    right: "2%",
  },

  button: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
    marginBottom: 12,
  },

  zoomButtonsContainer: {
    position: "absolute",
    top: "60%",
    right: "2%",
  },
});
