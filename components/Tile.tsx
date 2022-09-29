import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import ProgressBar from "./ProgressBar";
import { View, Image, Text } from "./Themed";
import Window from "../constants/Layout";
import { Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TileHeader from "./Tile/TileHeader";
import TileFooter from "./Tile/TileFooter";
import { FontAwesome } from "@expo/vector-icons";

const Tile = ({ children, rounded, style, navigate, event }) => {
  const handleClick = () => navigate("Event");

  return (
    <Pressable
      style={{
        ...styles.tileShadow,
      }}
    >
      <View
        style={{
          ...styles.tileWrapper,
          ...style,
        }}
      >
        <TouchableHighlight
          style={styles.cardContainerWrapper}
          onPress={handleClick}
        >
          <View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={styles.img}
                source={require("../assets/images/pic1.jpg")}
              />
            </View>
            {!rounded ? (
              <>
                <TileHeader>{event.title}</TileHeader>
                <TileFooter>
                  <View style={styles.eventDetails}>
                    {/* <Text style={{ color: "gold" }}>
                      <FontAwesome name="star" size={24} color="gold" /> 4
                    </Text> */}
                    <View style={{ backgroundColor: "transparent" }}>
                      <Text style={{ color: "white" }}>
                        <Text style={{ textDecorationLine: "line-through", paddingRight: 5 }}>
                          60
                        </Text>
                        <Text style={{ fontSize: 48 }}>
                          <Text header="h2" style={{ letterSpacing: -5, fontSize: 24 }}>$</Text>{event.price}
                        </Text>
                      </Text>
                    </View>
                  </View>
                </TileFooter>
              </>
            ) : null}
          </View>
        </TouchableHighlight>
      </View>
    </Pressable>
  );
};

export default Tile;

const styles = {
  tileShadow: {
    shadowRadius: 3,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
  },
  roundedImg: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: 50,
    minHeight: 50,
    width: "100%",
    height: "100%",
  },
  tileWrapper: {
    overflow: "hidden",
    position: "relative",
    margin: "5%",
    minHeight: 50,
    minWidth: 50,
  },
  eventDetails: {
    margin: 25,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  img: {
    minWidth: 50,
    minHeight: 50,
    width: "100%",
    height: "100%",
  },
};
