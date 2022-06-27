import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "./Themed";

const Button = ({ children, onPress, buttonStyle, buttonTextStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text margin="s" style={buttonTextStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
