import * as React from "react";
import { Text, View, TextInput } from "react-native";
import styled from "styled-components/native";
import { Colors, Spacings } from "../constants";

const Form = styled.View.attrs(({ styles }) => ({
  ...styles,
}))`
  flex: 1;
  padding: 0 ${Spacings.none}px;
`;

const FormGroup = styled.View.attrs(({ styles }) => ({
  ...styles,
}))`
  margin: ${Spacings._s1}px;
`;

const FormButton = ({ variant, title, onPress, style }) => {
  const styles = {
    baseText: {
      color: Colors[variant].text,
      margin: 12,
    }
  };

  return (
    <FormButtonStyledComponent
      style={style}
      variant={variant}
      onPress={onPress}
    >
      <Text style={styles.baseText}>{title}</Text>
    </FormButtonStyledComponent>
  );
};

FormButton.defaultProps = {
  variant: "primary"
}

const FormButtonStyledComponent = styled.TouchableOpacity.attrs(({ style }) => ({
  style
}))`
  color: ${ ({ variant }) => Colors[variant].text };
  background: ${ ({ variant }) => Colors[variant].background };
  width: auto;
  border-radius: 10px;
`;

const FormControl = ({ value, onChangeText, ...rest }) => {
  return (
    <FormControlStyledComponent
      onChangeText={onChangeText}
      value={value}
      {...rest}
    />
  );
};

const FormControlStyledComponent = styled.TextInput.attrs(({ styles }) => ({
  ...styles,
}))`
  border-bottom-color: #e3e3e3;
  border-bottom-width: 2px;
  min-height: 36px;
  padding-left: ${Spacings._s2}px;
`;

const FormLabel = styled.Text.attrs(({ styles }) => ({
  ...styles,
}))`
  margin-left: ${Spacings._s2}px;
`;

const FormText = styled.View.attrs(({ styles }) => ({
  ...styles,
}))`
  padding: 0 ${Spacings._s2}px;
`;

const Icon = styled.View`
  border-width: 1px;
  border-color: black;
  border-radius: 50px;
  shadow-color: #000;
  shadowOffset: {width: 2px, height: 5px};
  shadowOpacity: .34;
  shadowRadius: 6.27px;
`;

export {
  Icon,
  Form,
  FormLabel,
  FormGroup,
  FormControl,
  FormText,
  FormButton,
};
