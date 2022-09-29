import React from "react";
import { Text, View } from "../components/Themed";
import { ScrollView, Button, TextInput } from "react-native";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "../components/StyledComponents";
import Counter from "../components/Counter";
import { Divider } from "@rneui/base";
import { useSelector } from "react-redux";
import { Formik } from "formik";

export default function EventBookingScreen(props) {
  const testData = {
    charge: {
      fees: 25.24,
      taxes: 40.24,
    },
  };
  const user = useSelector((state) => state.auth.currentUser);

  return (
    <Formik
      initialValues={{ name: user.displayName, email: user.email, phone: "" }}
      onSubmit={(values) => props.navigation.navigate("PaymentSelection")}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.screen}>
          <ScrollView>
            <View padding="s0">
              <Form>
                <FormGroup>
                  <FormLabel>Name</FormLabel>
                  <FormControl
                    value={values.name}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Phone</FormLabel>
                  <FormControl
                    value={values.phone}
                    onChangeText={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                  />
                </FormGroup>
              </Form>
              <Text>Do you have any guests?</Text>
              <Counter />
            </View>
          </ScrollView>
          <View margin="s0" style={{ flexShrink: 1 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text>Fees</Text>
                <Text>Taxes</Text>
              </View>
              <View>
                <Text>${testData.charge.fees}</Text>
                <Text>${testData.charge.taxes}</Text>
              </View>
            </View>
            <Divider style={{ marginBottom: 6, marginTop: 6 }} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text>Total</Text>
              </View>
              <View>
                <Text>${testData.charge.taxes + testData.charge.fees}</Text>
              </View>
            </View>
          </View>
          <View style={{ flexShrink: 1 }}>
            <Button title="Continue to Payment" onPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
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
