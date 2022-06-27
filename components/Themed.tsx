import * as React from "react";
import {
  Text as DefaultText,
  View as DefaultView,
  Image as DefaultImage,
  TouchableOpacity as _TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function Image({ source, style, rounded, margin, padding }) {
  const _style = {
    padding: Colors.sizes[padding],
    margin: Colors.sizes[margin],
    ...style,
  };

  return (
    <DefaultImage
      source={source ? source : require("../assets/images/pic1.jpg")}
      style={_style}
    />
  );
}

export function Text({
  style,
  size,
  padding,
  margin,
  textAlign,
  lightColor,
  darkColor,
  header,
  ...rest
}) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const bodyOrHeaderStyles = header
    ? Colors.textVariants.header
    : Colors.textVariants.body;

  const _style = {
    color,
    fontSize: Colors.sizes[size],
    padding: Colors.sizes[padding],
    margin: Colors.sizes[margin],
    textAlign: textAlign,
    ...bodyOrHeaderStyles,
    ...style,
  };

  return <DefaultText style={_style} {...rest} />;
}

export function View({
  style,
  padding,
  margin,
  lightColor,
  darkColor,
  ...rest
}) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const _style = {
    padding: Colors.sizes[padding],
    margin: Colors.sizes[margin],
    ...style,
  };

  return (
    <DefaultView
      style={{ backgroundColor, ...Colors.textVariants.body, ..._style }}
      {...rest}
    />
  );
}

export function TouchableOpacity({
  style,
  padding,
  margin,
  lightColor,
  darkColor,
  ...rest
}) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const _style = {
    padding: Colors.sizes[padding],
    margin: Colors.sizes[margin],
    ...style,
  };

  return (
    <_TouchableOpacity
      style={{ backgroundColor, ...Colors.textVariants.body, ..._style }}
      {...rest}
    />
  );
}

const spaceDefaults = {
  margin: "none",
  padding: "none",
};

View.defaultProps = {
  ...spaceDefaults,
};

Text.defaultProps = {};

Image.defaultProps = {};
