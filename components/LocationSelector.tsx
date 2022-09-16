import React from "react";
import { TouchableOpacityButton, View, Text } from "./Themed";

const LocationSelector = () => {
  return (
    <View padding="_s3">
      <View margin="_s3">
        <Text>Find adventures near</Text>
      </View>
      <View
        margin="_s2"
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <Text>Tempe, AZ</Text>
        <View>
          <TouchableOpacityButton
            style={{ marginLeft: "auto" }}
            margin="none"
            padding="none"
            variant="link"
          >
            Change
          </TouchableOpacityButton>
        </View>
      </View>
    </View>
  );
};

export default LocationSelector;
