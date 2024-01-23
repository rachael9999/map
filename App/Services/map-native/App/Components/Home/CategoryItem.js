import { View, Text, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import React from "react";

export default function CategoryItem({ Category }) {
  const Icon = Category.icon;
  return (
    <View
      style={{
        padding: 5,
        alignItems: "center",
        width: 100,
        height: 95,
        borderRadius: 15,
        margin: 5,
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Icon width="40" height="30" />
      <Text style={{ marginTop: 10 }}>{Category.name}</Text>
    </View>
  );
}
