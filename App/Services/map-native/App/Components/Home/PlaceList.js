import { View, Text } from "react-native";
import React from "react";

export default function PlaceList({ placeList }) {
  return (
    <View>
      <Text>Found {placeList.length} PlaceList</Text>
    </View>
  );
}
