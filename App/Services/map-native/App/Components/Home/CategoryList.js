import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ setSelectedCategories }) {
  const categories = [
    {
      id: 1,
      name: "Restaurants",
      value: "restaurants",
      icon: require("../../../assets/food.svg").default,
    },
    {
      id: 2,
      name: "Coffee",
      value: "coffee",
      icon: require("../../../assets/cafe.svg").default,
    },
    {
      id: 3,
      name: "Bars",
      value: "bars",
      icon: require("../../../assets/beer.svg").default,
    },
    {
      id: 4,
      name: "Groceries",
      value: "groceries",
      icon: require("../../../assets/grocery.svg").default,
    },
    {
      id: 5,
      name: "Gas Stations",
      value: "gas stations",
      icon: require("../../../assets/gas.svg").default,
    },
    {
      id: 6,
      name: "Live music",
      value: "live music",
      icon: require("../../../assets/music.svg").default,
    },
  ];
  return (
    <>
      <View style={{ marginTop: 15, marginBottom: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "semi-bold" }}>
          Select Categories
        </Text>
      </View>
      <FlatList
        key={3}
        data={categories}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategories(item.value)}>
            <CategoryItem Category={item} />
          </TouchableOpacity>
        )}
        style={{
          marginBottom: 20,
          alignSelf: "center",
          position: "relative",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 2,
          elevation: 5,
        }}
      />
    </>
  );
}
