import * as React from "react";
import { Text, View, TouchableOpacityButton } from "../components/Themed";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#B3BFAA",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function LandingScreen({ navigation }) {
  return (
    <View
      style={styles.container}
      padding={undefined}
      margin={undefined}
      lightColor={undefined}
      darkColor={undefined}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
        padding={undefined}
        margin={undefined}
        lightColor={undefined}
        darkColor={undefined}
      >
        <Text
          header="h3"
          size="s2"
          style={undefined}
          variant={undefined}
          padding={undefined}
          margin={undefined}
          textAlign={undefined}
          lightColor={undefined}
          darkColor={undefined}
        >
          Venture
        </Text>
      </View>
      <View
        style={{ flex: 1, backgroundColor: "transparent" }}
        padding={undefined}
        margin={undefined}
        lightColor={undefined}
        darkColor={undefined}
      >
        <TouchableOpacityButton
          margin="_s2"
          onPress={() => navigation.push("Login")}
          style={undefined}
          lightColor={undefined}
          darkColor={undefined}
        >
          Log In
        </TouchableOpacityButton>
        <TouchableOpacityButton
          margin="_s2"
          onPress={() => navigation.push("Register")}
          style={undefined}
          lightColor={undefined}
          darkColor={undefined}
        >
          Register
        </TouchableOpacityButton>
      </View>
    </View>
  );
}
