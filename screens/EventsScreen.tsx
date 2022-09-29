import React, { useState } from "react";
import { View } from "../components/Themed";
import { StyleSheet, ScrollView } from "react-native";
import EventsSection from "../components/EventComponents/EventsSection";
import Tile from "../components/Tile";
import { Divider } from "@rneui/base";
import LocationSelector from "../components/LocationSelector";
import EventCategoryTabs from "../components/EventCategoryTabs";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  events: state.api
})

export default connect(mapStateToProps)(function EventsScreen({ navigation, events }) {
  const _events = events.queries["getEvents(undefined)"]?.data

  return (
    <View style={styles.screen}>
      <LocationSelector />
      <Divider width={3} color="lightgray" />
      <EventCategoryTabs />
      <Divider width={3} color="lightgray" />
      <ScrollView>
        {_events?.map((event, i) => (
          <Tile
            key={i}
            style={{
              height: 500,
              borderRadius: 25,
            }}
            event={event}
            navigate={navigation.navigate}
          />
        ))}
      </ScrollView>
    </View>
  );
})

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
