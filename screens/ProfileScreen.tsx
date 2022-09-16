import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView } from "react-native";
import {
  View,
  Text,
  Image,
  TouchableOpacityButton,
} from "../components/Themed";

const ProfileScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Text header="h3" size="s1" margin="_s3" style={{ lineHeight: 0 }}>
          Auther Robertson
        </Text>
      </View>
      <View
        margin="s0"
        style={{
          alignItems: "center",
          // flex: 4,
          // borderBottomWidth: 1,
          // borderBottomColor: "lightgray",
        }}
      >
        <Image
          rounded
          resizeMode="cover"
          style={{ width: 100, height: 100 }}
          source={require("../assets/images/event1.jpeg")}
        />
      </View>
      <View padding="_s2" style={{ flex: 3 }}>
        <Text margin="_s3">Member since 2012</Text>
        <View align="center" justify="center">
          <Text textAlign="center" margin="_s3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            sit amet justo donec enim diam. Nec tincidunt praesent semper
            feugiat nibh sed pulvinar.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacityButton
          style={{ width: 150, height: 40 }}
          variant="transparent"
        >
          <Ionicons name="ios-person-add-sharp" size={24} color="#92B677" />
        </TouchableOpacityButton>
        <TouchableOpacityButton
          style={{ width: 150, height: 40 }}
          variant="transparent"
        >
          <MaterialIcons name="report" size={24} color="#C70808" />
        </TouchableOpacityButton>
      </View>
    </View>
  );
};

export default ProfileScreen;
