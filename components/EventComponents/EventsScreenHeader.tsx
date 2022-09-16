import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";
import { View, Image, Text } from "../Themed";

const EventsScreenHeader = props => {
  return (
    <View
      style={{
        flexShrink: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 18,
        paddingBottom: 12,
        borderBottomWidth: 0.5,
        borderColor: "lightgray",
      }}
    >
      <View style={{ flex: 1 }}>
        <Pressable onPress={() => null}>
          <Ionicons name="ios-star" size={18} color="black" />
        </Pressable>
      </View>
      <View style={{ flex: 3, alignItems: "center" }}>
        <Text header>Venture</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        {/* <Ionicons
          name="information-circle-outline"
          size={24}
          color="lightgray"
        /> */}
      </View>
    </View>
  );
};

export default EventsScreenHeader;
