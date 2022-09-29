import { FontAwesome } from "@expo/vector-icons";
import { Divider } from "@rneui/base";
import React from "react";
import { ScrollView, Image, Button } from "react-native";
import { EventReview, EventStatusPanel, EventDetailsImageSection } from "../components/EventComponents";
import { View, Text } from "../components/Themed";
import Dimensions from "../constants/Layout";

const images = [
  require("../assets/images/highlight1.jpeg"),
  require("../assets/images/highlight2.jpeg"),
  // require("../assets/images/highlight3.jpeg"),
  // require("../assets/images/highlight4.jpeg"),
  // require("../assets/images/highlight5.jpeg"),
  // require("../assets/images/highlight6.jpeg"),
  // require("../assets/images/highlight7.jpeg"),
  // require("../assets/images/highlight8.jpeg"),
  // require("../assets/images/highlight9.jpeg"),
  // require("../assets/images/highlight10.jpeg"),
];

const EventDetailsScreen = (props) => {
  const {
    window: { width, height },
  } = Dimensions;

  return (
    <View style={{ flex: 1 }}>
      <EventDetailsImageSection/>
      <View style={{ flex: 2 }}>
        <ScrollView bounces={false}>
          <View padding="_s2" style={{ minHeight: 100 }}>
            <View>
              <Text header margin="_s3">
                Hiking the Grand Canyon
              </Text>
            </View>
            <EventStatusPanel />
          </View>
          <Divider />
          <View padding="_s2" style={{ minHeight: 100 }}>
            <View>
              <View margin="_s3">
                <Text header>About</Text>
              </View>
              <View margin="s0">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dictum at tempor commodo ullamcorper a lacus vestibulum sed
                  arcu. Congue quisque egestas diam in arcu.
                </Text>
              </View>
            </View>
          </View>
          {/* <Divider /> */}
          {/* <View padding="_s2" style={{ minHeight: 100 }}>
            <Text header margin="_s3">
              Reviews
            </Text>
            <View>
              <View style={{ alignItems: "center" }}>
                <FontAwesome
                  name="star"
                  style={{ position: "relative" }}
                  size={250}
                  color="orange"
                />
                <Text
                  style={{
                    fontSize: 40,
                    position: "absolute",
                    top: "40%",
                    backgroundColor: "transparent",
                  }}
                >
                  4 / 5
                </Text>
              </View>
              <View>
                <EventReview margin="_s2" />
                <EventReview margin="_s2" />
                <EventReview margin="_s2" />
              </View>
            </View>
          </View> */}
        </ScrollView>
      </View>
      <View style={{ flexShrink: 1 }}>
        <Button
          title="Book Your Spot"
          onPress={() => props.navigation.navigate("EventBilling")}
        />
      </View>
    </View>
  );
};

export default EventDetailsScreen;
