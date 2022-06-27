import * as React from "react";
import { Button, TextInput, View, Text } from "react-native";
// import { Text, View } from '../components/Themed';
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormButton,
} from "../components/StyledComponents";
import { useDispatch } from "react-redux";

export default function LoginScreen({ navigation }) {
  const [user, changeUser] = React.useState();
  const [pass, changePass] = React.useState();
  const dispatch = useDispatch();

  const onSubmit = () => dispatch({ type: "user/authenticationStateChanged" });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Form>
        <FormGroup>
          <FormLabel>Username</FormLabel>
          <FormControl value={user} handleChange={changeUser} />
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
