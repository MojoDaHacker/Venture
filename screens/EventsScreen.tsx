import React, { useState } from "react";
import { View } from "../components/Themed";
import { StyleSheet, ScrollView } from "react-native";
import EventsSection from "../components/EventComponents/EventsSection";
import Tile from "../components/Tile";
import { Divider } from "@rneui/base";
import LocationSelector from "../components/LocationSelector";

export default function EventsScreen(props) {
  const data = [
    {
      sectionName: "Local Events",
      RenderComponent: Tile,
      rounded: true,
      style: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2,
      },
    },
    {
      sectionName: "Hosted Adventures",
      RenderComponent: Tile,
      style: {
        height: 500,
        borderRadius: 25,
      },
    },
    {
      sectionName: "International Adventures",
      RenderComponent: Tile,
      style: {
        height: 200,
        width: 200,
        borderRadius: 25,
      },
    },
  ];

  return (
    <View style={styles.screen}>
      <LocationSelector />
      <Divider width={5} color="lightgray" />
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

const styles = StyleSheet.create({
  progress: {},
  screen: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
