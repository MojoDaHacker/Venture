import React, { useState } from "react";
import { Text, View, Image } from "../components/Themed";
import {
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Pressable,
} from "react-native";
import Window from "../constants/Layout";
import SwipeCard from "../components/SwipeCard";
import EventsSection from "../components/EventsSection";
import Tile from "../components/EventTile";

const { window } = Window;

export default function EventsScreen(props) {
  const data = [
    {
      sectionName: "Highlights",
      RenderComponent: RenderItem,
    },
    {
      sectionName: "Best Sellers",
      RenderComponent: SwipeCard,
    },
    {
      sectionName: "Trending",
      RenderComponent: TrendingEvents,
    },
    {
      sectionName: "Staff Picks",
      RenderComponent: TrendingEvents,
    },
  ];

  return (
    <View style={styles.screen}>
      <ScrollView>
        {data.map((e, i) => (
          <EventsSection
            key={i}
            {...e}
            navigateFn={props.navigation.navigate}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const RenderItem = ({ navigate }) => {
  const size = 100;
  const items = [0, 1, 2, 3, 4];

  return (
    <View margin="s">
      <ScrollView horizontal>
        {items.map((e) => (
          <Tile key={e} size={size} navigate={navigate}>
            <Image
              style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                marginHorizontal: 12,
              }}
            />
          </Tile>
        ))}
      </ScrollView>
    </View>
  );
};

const TrendingEvents = ({ navigate }) => {
  const size = 200;
  const items = [0, 1, 2, 3, 4];

  return (
    <View margin="s">
      <ScrollView horizontal>
        {items.map((e, i) => (
          <Tile key={i} size={size} navigate={navigate}>
            <Image
              style={{
                width: size,
                height: size,
                borderRadius: size / 10,
                backgroundColor: "lightgray",
                marginHorizontal: 12,
              }}
            ></Image>
          </Tile>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
