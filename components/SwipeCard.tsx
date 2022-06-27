import React from "react";
import { View, Text } from "./Themed";
import { StyleSheet, Image, TouchableHighlight } from "react-native";
import Window from "../constants/Layout";

const { window } = Window;

const SwipeCard = (props) => {
  return (
    <TouchableHighlight
      // style={styles.sendRequestIcon}
      // underlayColor="blue"
      onPress={() => props.navigate("Event")}
    >
      <View style={styles.cardContainerWrapper}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.img}
            source={require("../assets/images/pic1.jpg")}
          />
        </View>
        <View style={styles.eventInfoContainer}>
          <View style={{ backgroundColor: "transparent" }}>
            <Text style={{ margin: 25, color: "white" }}>Name {"\n"}Rating</Text>
          </View>
          <View style={{ backgroundColor: "transparent" }}>
            <Text style={{ margin: 25, color: "white" }}>$15</Text>
          </View>
          <View style={{ backgroundColor: "transparent" }}>
            <Text style={{ margin: 25, color: "white" }}>$15</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default SwipeCard;

const styles = StyleSheet.create({
  eventInfoContainer: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    zIndex: 1,
    position: "absolute",
    top: "85%",
  },
  sendRequestIcon: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 100,
    position: "absolute",
    right: 25,
    bottom: 25,
  },
  cardContainerWrapper: {
    // needed to put shadow on img container
    shadowRadius: 3,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    borderRadius: 25,
    // marginTop: window.height * (.25 * .5),
    // width: '100%',
    flex: 1,
    height: window.height * 0.75,
    margin: 35,
  },
  cardContainer: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
    borderRadius: 25,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  eventCrowdContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "transparent",
    position: "absolute",
    paddingHorizontal: 5,
    width: "100%",
    bottom: -35,
  },
  smallImg: {
    borderRadius: 50,
    width: 65,
    height: 65,
  },
});
