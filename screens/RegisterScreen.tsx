import * as React from 'react';
import { Text, TextInput, Button, View } from 'react-native';
// import { Text, View } from '../components/Themed';
import { Container, Row, Col, Icon } from '../components/StyledComponents';

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

export default function RegisterScreen(props) {
  const [form, onFormChange] = React.useState({
    email: '',
    user: '',
    pwd: '',
    dob: '',
  });
  const handleChange = ( name, value ) => onFormChange(state => ({
    ...state,
    [name]: value
  }))

  return (
    <Container styles={styles.container}>
      <Row>
        <Col>
          <View>
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => handleChange('email', value)}
              value={form.email}
            />
          </View>
          <View>
            <Text>Username</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => handleChange('user', value)}
              value={form.user}
            />
          </View>
          <View>
            <Text>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => handleChange('pwd', value)}
              value={form.pwd}
            />
          </View>
          <View>
            <Text>Date of Birth</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => handleChange('dob', value)}
              value={form.dob}
            />
          </View>
          <Button
            title="Trouble Logging In"
            onPress={() => null}
          />
          <Button
            title="Log In"
            onPress={() => null}
          />
        </Col>
      </Row>
    </Container>
  );
}
