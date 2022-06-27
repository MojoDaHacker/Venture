import React, { useState } from "react";
import { Text, View } from "../components/Themed";
import { StyleSheet, ScrollView, TouchableHighlight } from "react-native";
import Window from "../constants/Layout";
import SwipeCard from "../components/SwipeCard";
import EventTile from "../components/EventTile";
import Event from "../components/Event";
import Slider from "../components/slider";
import { Ionicons } from "@expo/vector-icons";
import InfoCard from "../components/InfoCard";
import {
  Form,
  FormButton,
  FormControl,
  FormGroup,
  FormLabel,
} from "../components/StyledComponents";

const { window } = Window;

export default function PaymentMethodSelectionScreen(props) {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View>
          <Form>
            <Text header>Payment Method</Text>
            <FormGroup>
              <FormLabel>Card Number</FormLabel>
              <FormControl value={null} onChange={() => null} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Exp Date</FormLabel>
              <FormControl value={null} onChange={() => null} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Security Code</FormLabel>
              <FormControl value={null} onChange={() => null} />
            </FormGroup>
            <FormGroup>
              <FormLabel>Zip Code</FormLabel>
              <FormControl value={null} onChange={() => null} />
            </FormGroup>
            <FormGroup style={{ marginTop: 24, flexDirection: "row" }}>
              <FormButton title="Complete Booking" onPress={() => props.navigation.navigate("Messages")} />
              {/* <FormButton
                variant="link"
                style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
                title="Trouble Logging In?"
                onPress={() => null}
              /> */}
            </FormGroup>
          </Form>
        </View>
      </ScrollView>
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
