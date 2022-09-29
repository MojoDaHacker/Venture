import * as React from "react";
import { View } from "react-native";
import auth from "@react-native-firebase/auth"
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormButton,
} from "../components/StyledComponents";

export default function LoginScreen({ navigation }) {
  const [email, changeUser] = React.useState();
  const [pass, changePass] = React.useState();

  const onSubmit = () => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .catch(error => {
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
          <FormControl value={email} handleChange={changeUser} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl value={pass} handleChange={changePass} />
        </FormGroup>
        <FormGroup style={{ flexDirection: "row", marginTop: 24 }}>
          <FormButton variant="primary" title="Log In" onPress={onSubmit} />
          <FormButton
            variant="link"
            title="Trouble Logging In?"
            onPress={() => null}
          />
        </FormGroup>
      </Form>
    </View>
  );
}
