import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import Styles from '../constants/Styles';
// import { Text, View } from '../components/Themed';
import { Container, Row, Col, Icon } from '../components/StyledComponents';

export default function MediaScreen(props) {
  return (
    <Container>
      <Row style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Col>
          <View style={{marginHorizontal: 'auto'}}>
            <Image style={{ width: 150, height: 150, borderRadius: 100}} source={require("../assets/images/pic1.jpg")}/>
          </View>
        </Col>
      </Row>
      <Row style={{flex: 1}}>
        <Col style={{flex: 1}}>
          <Icon as={Pressable} onPress={() => props.navigation.navigate('Settings')} style={styles.controlsContainer}>
            <FontAwesome name="gear" size={25}/>
          </Icon>
        </Col>
        <Col style={{flex: 1, justifyContent: 'center'}}>
          <Icon as={Pressable} onPress={() => props.navigation.navigate('Media')} style={styles.controlsContainer}>
            <FontAwesome name="camera" size={25}/>
          </Icon>
        </Col>
        <Col style={{flex: 1}}>
          <Icon as={Pressable} onPress={() => props.navigation.navigate('Info')} style={styles.controlsContainer}>
            <FontAwesome name="pencil" size={25}/>
          </Icon>
        </Col>
      </Row>
      <Row style={{flex: 1}}>
        <Col style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View><Text>Matthew McKenzie</Text><Text>25</Text></View>
          <View><Text>Marketing Coordinator</Text></View>
          <View><Text>University Of Central Florida</Text></View>
        </Col>
      </Row>
    </Container>
  );
}


const styles = StyleSheet.create({
  controlsContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    marginLeft: 12,
    marginBottom: 16,
    borderRadius: 100,
    borderWidth: 1,
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: .4,
  },
});
