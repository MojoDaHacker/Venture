import React from "react";
import { View, Image } from "../Themed";

const EventDetailsImageSection = () => {
  return (
    <View
      style={{
        height: "100%",
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
      }}
    >
      <Image
        resizeMode="cover"
        style={{ flex: 1, width: "100%", height: "100%" }}
        source={require("../../assets/images/event1.jpeg")}
      />
    </View>
  );
};

export default EventDetailsImageSection;
