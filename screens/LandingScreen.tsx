import * as React from "react";
import { Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Styles from "../constants/Styles";
import { Text, View } from "../components/Themed";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#B3BFAA",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function EditInfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
        <Text header>Venture</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        <Button onPress={() => navigation.push("Login")} title="Log In" />
        <Button onPress={() => navigation.push("Register")} title="Register" />
      </View>
    </View>
  );
}
