import React from "react";
import { Text, View } from "./Themed";

const EventsSection = ({ sectionName, RenderComponent, navigateFn }) => {
  return (
    <View>
      <View margin="xs">
        <Text header>{sectionName}</Text>
      </View>
      <View>
        <RenderComponent navigate={navigateFn}/>
      </View>
    </View>
  );
};

export default EventsSection;
