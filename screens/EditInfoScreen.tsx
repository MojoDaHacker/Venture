import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import Styles from '../constants/Styles';
// import { Text, View } from '../components/Themed';
import { Container, Row, Col, Icon } from '../components/StyledComponents';

export default function EditInfoScreen(props) {
  return (
    <Container>
      
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
