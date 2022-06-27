import * as React from "react";
import {
  Image,
  ScrollView,
  StyleSheet as Styles,
  Pressable,
} from "react-native";
import { Text, View } from "../components/Themed";

export default function MessagesScreen(props) {
  const testArr = [0, 1, 2, 4, 5, 6, 7, 8, 9, 107, 8, 9, 10];

  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center", margin: 12 }}>
          <Text>Test</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", margin: 12 }}>
          <Text>Test</Text>
        </View>
      </View> */}
      <ScrollView bounces={false}>
        {testArr.map((val, i) => (
          <Pressable key={i} onPress={() => props.navigation.navigate("Conversation")}>
            <View style={{ flexDirection: "row", margin: 12 }}>
              <View
                style={{
                  flexShrink: 1,
                }}
              >
                <Image
                  style={styles.img}
                  source={require("../assets/images/pic1.jpg")}
                />
              </View>
              <View
                style={{
                  marginLeft: 18,
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <View>
                  <Text>Firstname Lastname</Text>
                </View>
                <View style={{ marginTop: 12 }}>
                  <Text>Hello How are you?</Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = Styles.create({
  container: {
    flex: 1,
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
});
