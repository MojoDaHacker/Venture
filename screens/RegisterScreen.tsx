import * as React from "react";
import { View } from "react-native";
import auth from "@react-native-firebase/auth";
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
    name: "",
    pwd: "",
    dob: "",
  });
  const handleChange = (name, value) => {
    onFormChange((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    auth()
      .createUserWithEmailAndPassword(form.email, form.pwd)
      .then(({ user }) => {
        user
          .updateProfile({
            displayName: form.name,
          })
          .catch((err) => console.log("Error occured updating profile."));
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        if (error.code === "auth/weak-password") {
          console.log("Your password is trash!");
        }

        console.error(error);
      });
  };

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
          <FormLabel>Name</FormLabel>
          <FormControl
            value={form.name}
            handleChange={(value) => handleChange("name", value)}
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
