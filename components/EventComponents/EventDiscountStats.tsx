import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Divider } from "@rneui/base";
import React from "react";
import { Text, View } from "../Themed";

const EventDiscountStats = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.iconContainer}>
                <Text>8-15%</Text>
                <MaterialIcons name="event" size={24} color="black" />
            </View> */}
      <View style={styles.iconContainer}>
        <Text margin="_s3">15%</Text>
        <FontAwesome5 name="hotel" size={24} color="black" />
      </View>
      {/* <View style={styles.iconContainer}>
                <Text>10-20%</Text>
                <FontAwesome5 name="plane" size={24} color="black" />
            </View> */}
      {/* <View style={styles.iconContainer}>
                <Text>5-10%</Text>
                <FontAwesome5 name="car" size={24} color="black" />
            </View> */}
    </View>
  );
};

export default EventDiscountStats;

const styles = {
  container: {
    // flex: 1,
    flexDirection: "row",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
};
