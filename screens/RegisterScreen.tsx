import * as React from "react";
import { Text, TextInput, Button, View } from "react-native";
import { useDispatch } from "react-redux";
// import { Text, View } from '../components/Themed';
import {
  Form,
  FormButton,
  FormControl,
  FormGroup,
  FormLabel,
} from "../components/StyledComponents";

export default function RegisterScreen(props) {
  const [form, onFormChange] = React.useState({
    email: "",
    user: "",
    pwd: "",
    dob: "",
  });
  const handleChange = (name, value) =>
    onFormChange((state) => ({
      ...state,
      [name]: value,
    }));

  const dispatch = useDispatch();
  const onSubmit = () => dispatch({ type: "user/authenticationStateChanged" });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Form>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormControl
            value={form.email}
            handleChange={(value) => handleChange("email", value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Username</FormLabel>
          <FormControl
            value={form.user}
            handleChange={(value) => handleChange("user", value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl
            value={form.pwd}
            handleChange={(value) => handleChange("pwd", value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Date of Birth</FormLabel>
          <FormControl
            value={form.dob}
            handleChange={(value) => handleChange("dob", value)}
          />
        </FormGroup>
        <FormGroup style={{ marginTop: 24, flexDirection: "row" }}>
          <FormButton title="Sign Up" onPress={onSubmit} />
          <FormButton
            variant="link"
            style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
            title="Trouble Logging In?"
            onPress={() => null}
          />
        </FormGroup>
      </Form>
    </View>
  );
}
