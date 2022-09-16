import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text } from "../Themed";

const TileHeader = ({ children }) => {
  return (
    <View style={styles}>
      <LinearGradient colors={["rgba(0,0,0,0.6)", "transparent"]}>
        <Text header="h3" size="xl" style={{ margin: 25, color: "white" }}>
          {children}
        </Text>
      </LinearGradient>
    </View>
  );
};

export default TileHeader;

const styles = {
  backgroundColor: "transparent",
  zIndex: 2,
  width: "100%",
  position: "absolute",
  top: "0%",
};
