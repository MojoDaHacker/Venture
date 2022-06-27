import React, { useState } from "react";
import { Text, View } from "../components/Themed";
import { StyleSheet, ScrollView, TouchableHighlight, Button } from "react-native";
import Window from "../constants/Layout";
import SwipeCard from "../components/SwipeCard";
import EventTile from "../components/EventTile";
import Event from "../components/Event";
import Slider from "../components/slider";
import { Ionicons } from "@expo/vector-icons";
import InfoCard from "../components/InfoCard";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "../components/StyledComponents";

const { window } = Window;

export default function EventBookingScreen(props) {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View>
          <Text header>Personal Information</Text>
          <Form>
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormControl value={null} onChange={() => null} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormControl value={null} onChange={() => null} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Phone</FormLabel>
              <FormControl value={null} onChange={() => null} />
            </FormGroup>
          </Form>
          <Text>Do you have any guests?</Text>
        </View>
      </ScrollView>
      <View style={{ flexShrink: 1, margin: 12 }}>
        <Text>Subtotal</Text>
        <Text>Fees</Text>
        <Text>Taxes</Text>
        <Text>Total</Text>
      </View>
      <View style={{ flexShrink: 1 }}>
        <Button
          title="Continue to Payment"
          onPress={() => props.navigation.navigate("PaymentSelection")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
