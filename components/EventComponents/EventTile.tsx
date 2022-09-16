import React from "react";
import { Pressable } from "react-native";
import { View, Text } from "../Themed";

const EventTile = ({ size, navigate, children }) => {
  return (
    <Pressable onPress={() => navigate("Event")}>
      {children}
    </Pressable>
  );
};

export default EventTile;

