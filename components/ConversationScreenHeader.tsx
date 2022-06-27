import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";
import { View, Image } from "./Themed";

const ConversationScreenHeader = ({
  mode,
  layouts,
  insets,
  scene,
  previous,
  navigation,
  styleInterpolator,
}) => {
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
      <View style={{ flex: 1, alignItems: "center" }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="lightblue" />
        </Pressable>
      </View>
      <View style={{ flex: 3, alignItems: "center" }}>
        <Pressable onPress={() => navigation.navigate("ConversationDetailsModal")}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={require("../assets/images/pic1.jpg")}
          />
        </Pressable>
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

export default ConversationScreenHeader;
