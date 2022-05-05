import * as React from "react";
import { Text, View, TextInput } from "react-native";
import styled from "styled-components/native";
import Colors from "../constants/Colors";

const Container = styled.View.attrs(({ styles }) => ({
  ...styles,
}))`
  flex: 1 1 0;
`;
const Row = styled.View.attrs(({ styles }) => ({
  ...styles,
}))`
  display: flex;
  flex-direction: row;
`;
const Col = styled.View.attrs(({ styles }) => ({
  ...styles,
}))`
  padding: 0 12px;
`;

const Form = styled.View.attrs(({ styles }) => ({
  ...styles,
}))`
  padding: 0 12px;
`;

const FormGroup = styled.View.attrs(({ styles }) => ({
  ...styles,
}))`
  margin: 12px;
`;

const FormButton = ({ variant, title, onPress, style }) => {
  const styles = {
    submit: {
      flexShrink: 1,
      // borderWidth: 1,
      backgroundColor: "lightgreen",
      textAlign: "center",
      textAlignVertical: "center",
    },
    trouble: {
      flexGrow: 1,
      text: {
        textAlign: "right",
        textAlignVertical: "bottom",
      },
    },
    baseText: {
      // borderWidth: 1,
      margin: 12,
    },
    link: {
      backgroundColor: "blue",
    },
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

const FormButtonStyledComponent = styled.TouchableOpacity.attrs(({ style }) => ({
  style
}))`
  background: ${({ variant, theme }) => (theme[variant] && theme[variant].backgroundColor) || theme.primary.backgroundColor};
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 10px;
`;

const FormControl = ({ value, handleChange }) => {
  return (
    <FormControlStyledComponent
      // style={styles.input}
      onChangeText={handleChange}
      value={value}
    />
  );
};

const FormControlStyledComponent = styled.TextInput.attrs(({ styles }) => ({
  ...styles,
}))`
  background-color: #e3e3e3;
  min-height: 36px;
  padding-left: 12px;
`;

const FormLabel = styled.Text.attrs(({ styles }) => ({
  ...styles,
}))`
  margin: 12px;
`;

const FormText = styled.View.attrs(({ styles }) => ({
  ...styles,
}))`
  padding: 0 12px;
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
  Container,
  Row,
  Col,
  Icon,
  Form,
  FormLabel,
  FormGroup,
  FormControl,
  FormText,
  FormButton,
};
