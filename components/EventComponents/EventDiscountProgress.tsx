import React from "react";
import ProgressBar from "../ProgressBar";
import { Text, View } from "../Themed";

const EventDiscountProgress = () => {
  return (
    <View style={styles.container}>
      <View padding="_s1" style={styles.progressDescription}>
        <View>
          <Text>30</Text>
        </View>
        <View>
          <Text>out of the goal of</Text>
        </View>
        <View>
          <Text>100</Text>
        </View>
      </View>
      <ProgressBar style={styles.progress} />
    </View>
  );
};

export default EventDiscountProgress;

const styles = {
  container: {
    marginTop: 25,
  },
  progress: {
    height: 20,
    borderRadius: 25,
  },
  progressDescription: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
};
