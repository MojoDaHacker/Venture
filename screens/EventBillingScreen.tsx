import React from "react";
import { Text, View } from "../components/Themed";
import { ScrollView, Button } from "react-native";
import Window from "../constants/Layout";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "../components/StyledComponents";
import Counter from "../components/Counter";
import { Divider } from "@rneui/base";

export default function EventBookingScreen(props) {
  const testData = {
    charge: {
      fees: 25.24,
      taxes: 40.24,
    },
  };

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View padding="s0">
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
          <Counter />
        </View>
      </ScrollView>
      <View margin="s0" style={{ flexShrink: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text>Fees</Text>
            <Text>Taxes</Text>
          </View>
          <View>
            <Text>${testData.charge.fees}</Text>
            <Text>${testData.charge.taxes}</Text>
          </View>
        </View>
        <Divider  style={{ marginBottom: 6, marginTop: 6 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text>Total</Text>
          </View>
          <View>
            <Text>${testData.charge.taxes + testData.charge.fees}</Text>
          </View>
        </View>
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

const styles = {
  screen: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: "100%",
  },
};
