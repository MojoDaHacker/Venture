import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import Styles from '../constants/Styles';
// import { Text, View } from '../components/Themed';
import { Container, Row, Col } from '../components/StyledComponents';

export default function ProfileScreen() {
  return (
    <Container>
      <Row>
        <Col>
          <View>
            <FontAwesome name="gear" size={25}/>
          </View>
        </Col>
        <Col>
          <View>
            <FontAwesome name="camera" size={25}/>
          </View>
        </Col>
        <Col>
          <View>
            <FontAwesome name="pencil" size={25}/>
          </View>
        </Col>
      </Row>
      <Row>
        {/* <Image /> */}
      </Row>
      <Row>
        <Col>
          <View><span>Matthew</span><span>25</span></View>
          <View>Marketing Coordinator</View>
          <View>University Of Central Florida</View>
        </Col>
      </Row>
    </Container>
  );
}

const styles = StyleSheet.create({
  
});
