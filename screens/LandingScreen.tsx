import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import Styles from '../constants/Styles';
// import { Text, View } from '../components/Themed';
import { Container, Row, Col, Icon } from '../components/StyledComponents';

const styles = {
  container: {
    justifyContent: 'center',
  }
}

export default function EditInfoScreen({ navigation }) {
  return (
    <Container styles={styles.container}>
      <Row>
        <Col>
          <Text style={{ fontSize: 50 }}>Venture</Text>
          <Button
            onPress={() => navigation.push('Login')}
            title="Log In"
            // color="#841584"
            // accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={() => navigation.push('Register')}
            title="Register"
            // color="#841584"
            // accessibilityLabel="Learn more about this purple button"
          />
        </Col>
      </Row>
    </Container>
  );
}

