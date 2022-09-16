import React from "react";
import { View, Text } from "./Themed";
import { StyleSheet, Image, TouchableHighlight } from "react-native";
import Window from "../constants/Layout";
import ProgressBar from "./ProgressBar";

const { window } = Window;

const SwipeCard = (props) => {
  return (
    <TouchableHighlight
      style={styles.cardWrapper}
      // underlayColor="blue"
      onPress={() => props.navigate("Event")}
    />
  );
};

export default SwipeCard;

const styles = StyleSheet.create({
  progressBar: {
    width: "100%",
    height: 15,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  eventInfoContainer: {
    backgroundColor: "transparent",
    // flexDirection: "row",
    zIndex: 1,
    width: "100%",
    position: "absolute",
    bottom: "0%",
  },
  eventDetails: {
    flex: 1,
    // width: "100%",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  eventCapacity: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  cardContainerWrapper: {
    borderRadius: 25,
    // marginTop: window.height * (.25 * .5),
    // width: '100%',
    flex: 1,
    height: window.height * 0.75,
    margin: 35,
    position: "relative",
    overflow: "hidden",
  },
  cardContainer: {
    flex: 1,
    borderRadius: 25,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  cardWrapper: {
    shadowRadius: 3,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
  }
});
