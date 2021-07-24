import * as React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
// import { Text, View } from '../components/Themed';
import { Container, Row, Col, Icon } from '../components/StyledComponents';
import { useDispatch } from 'react-redux';

const styles = {
  container:{
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  }
}

export default function LoginScreen({ navigation }) {
  const [userInput, onUserChange] = React.useState();
  const [passInput, onPassChange] = React.useState();
  const dispatch = useDispatch()

  const onSubmit = () => dispatch({ type: 'user/authenticationStateChanged' })

  return (
    <Container styles={styles.container}>
      <Row>
        <Col>
          <View>
            <Text>Username</Text>
            <TextInput
              style={styles.input}
              onChangeText={onUserChange}
              value={userInput}
            />
          </View>
          <View>
            <Text>Username</Text>
            <TextInput
              style={styles.input}
              onChangeText={onPassChange}
              value={passInput}
            />
          </View>
          <Button
            title="Trouble Logging In"
            onPress={() => null}
          />
          <Button
            title="Log In"
            onPress={onSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
}

