import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Image, Button, Alert, StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "../components/Themed";
import Dimensions from "../constants/Layout";

const ProfileScreen = (props) => {
  const {
    window: { width, height },
  } = Dimensions;

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 4,
          borderBottomWidth: 1,
          borderBottomColor: "lightgray",
        }}
      >
        <Image
          resizeMode="cover"
          style={{ flex: 1, width: "100%" }}
          source={require("../assets/images/event1.jpeg")}
        />
      </View>
      <View padding="s" style={{ flex: 2 }}>
        <ScrollView bounces={false}>
          <View>
            <View>
              <Text header margin="xs">Name, Age</Text>
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text margin="xs">Bio</Text>
              <Text margin="xs">A member since 2012</Text>
            </View>
          </View>
          <View>
            <Text header margin="xs">
              Latest Adventure
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={{ flexShrink: 1, flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity>
          <Ionicons name="ios-person-add-sharp" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="report" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
