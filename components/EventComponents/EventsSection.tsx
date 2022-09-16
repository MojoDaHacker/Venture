import React from "react";
import { Text, View } from "../Themed";

const EventsSection = ({ sectionName, RenderComponent, navigateFn, ...rest }) => {
  return (
    <View style={{ width: "auto", height: "auto" }}>
      <View margin="_s3">
        <Text header>{sectionName}</Text>
      </View>
      <View>
        <RenderComponent navigate={navigateFn} {...rest} />
      </View>
    </View>
  );
};

export default EventsSection;
