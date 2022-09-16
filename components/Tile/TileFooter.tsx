import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import ProgressBar from "../ProgressBar";
import { View, Text } from "../Themed";

const TileFooter = ({ children }) => {
  return (
    <View style={style.content}>
      <LinearGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
        {children}
        <View style={style.eventCapacity}>
          <ProgressBar style={style.progressBar} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default TileFooter;

const style = {
  content: {
    backgroundColor: "transparent",
    zIndex: 1,
    width: "100%",
    position: "absolute",
    bottom: "0%",
  },
  eventCapacity: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  progressBar: {
    width: "100%",
    height: 15,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  }
};
