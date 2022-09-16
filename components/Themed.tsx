import * as React from "react";
import {
  Text as DefaultText,
  View as DefaultView,
  Image as DefaultImage,
  TouchableOpacity as _TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";

import { Spacings, Colors, Styles } from "../constants";
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
    padding: Spacings[padding],
    margin: Spacings[margin],
    borderRadius: rounded ? style.width / 2 : null,
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
  variant,
  size = "s0",
  padding,
  margin,
  textAlign,
  lightColor,
  darkColor,
  header,
  body = "b1",
  ...rest
}) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const fontStyle = header ? Styles.header[header] : Styles.body[body];

  const _style = {
    color: variant ? Colors[variant].text : null,
    fontSize: Spacings[size],
    padding: Spacings[padding],
    margin: Spacings[margin],
    textAlign: textAlign,
    ...fontStyle,
    ...style,
  };

  return <DefaultText style={_style} {...rest} />;
}

export function View({
  style,
  align,
  justify,
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
    justifyContent: justify,
    alignItems: align,
    padding: Spacings[padding],
    margin: Spacings[margin],
    ...style,
  };

  return <DefaultView style={{ backgroundColor, ..._style }} {...rest} />;
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
    padding: Spacings[padding],
    margin: Spacings[margin],
    ...style,
  };

  return <_TouchableOpacity style={{ backgroundColor, ..._style }} {...rest} />;
}

export function TouchableOpacityButton({
  style,
  variant = "primary",
  size = "s0",
  padding = "_s2",
  margin = "_s1",
  lightColor,
  darkColor,
  children,
  fluid,
  ...rest
}) {
  const backgroundColor = Colors[variant].background;

  const _style = {
    padding: Spacings[padding],
    margin: Spacings[margin],
    ...style,
  };

  return (
    <_TouchableOpacity
      style={{ backgroundColor, borderRadius: 10, ..._style }}
      {...rest}
    >
      <View
        style={{
          width: fluid ? "100%" : null,
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
        {typeof children === "string" ? (
          <Text variant={variant} size={size}>
            {children}
          </Text>
        ) : (
          <View variant={variant} size={size} style={{ backgroundColor: "transparent" }}>
            {children}
          </View>
        )}
      </View>
    </_TouchableOpacity>
  );
}

export function Icon({ children, color }){

  return (
    <>
      {children}
    </>
  )
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
