import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View } from "./Themed";

const StarRatings = ({ stars, size, vertical }) => (
  <View style={{ flexDirection: vertical ? "" : "row", flexWrap: "nowrap" }}>
    {new Array(stars).fill(0).map((star, i) => (
      <FontAwesome key={i} name="star" style={{}} size={size} color="orange" />
    ))}
  </View>
);

export default StarRatings;

StarRatings.defaultProps = {
  vertical: false,
  size: 25,
  stars: 3,
};
