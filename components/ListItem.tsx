import React from "react";
import { Text, View, TouchableOpacity } from "./Themed";

const ListItem = ({ children, pressable, ...rest }) => {
  const RenderComponent = pressable ? TouchableOpacity : View;

  return (
    <RenderComponent margin="none" padding = "s0" style={{  }} {...rest}>
      <Text textAlign="center">{children}</Text>
    </RenderComponent>
  );
};

export default ListItem;

