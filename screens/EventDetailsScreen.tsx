import React from "react";
import { ScrollView, Image, Button, Alert, StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import Dimensions from "../constants/Layout";

const ConfirmEventScreen = (props) => {
  const {
    window: { width, height },
  } = Dimensions;

  return (
    <View style={{ flex: 1 }}>
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
          source={require("../assets/images/event1.jpeg")}
        />
      </View>
      <View style={{ flex: 2, padding: 12 }}>
        <ScrollView bounces={false}>
          <View>
            <View>
              <Text header margin="xs">
                Event Details
              </Text>
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text margin="xs">Event Name</Text>
              <Text margin="xs">Event Description</Text>
              <Text margin="xs">Event Date</Text>
              <Text margin="xs">Event Address</Text>
            </View>
          </View>
          <View>
            <View>
              <Text header margin="xs">
                Included Items
              </Text>
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text>Match Profile Pic</Text>
              <View style={{ margin: 12, padding: 12 }}>
                <Text>- 1 All Day Pass</Text>
                <Text>- 1 Board Rental</Text>
              </View>
            </View>
            <View style={{ marginLeft: 12 }}>
              <Text>Match Profile Pic</Text>
              <View style={{ margin: 12, padding: 12 }}>
                <Text>- 1 All Day Pass</Text>
                <Text>- 1 Board Rental</Text>
              </View>
            </View>
          </View>
          <View>
            <Text header margin="xs">
              Reviews
            </Text>
          </View>
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

export default ConfirmEventScreen;
