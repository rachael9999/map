import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";

export default function Header() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      <View>
        <TextInput placeholder="Search" style={styles.search} />
      </View>
      <Image
        source={require("./../../../assets/user.png")}
        style={styles.userImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
  },
  search: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 20,
    width: Dimensions.get("screen").width * 0.6,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});
