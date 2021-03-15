import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import Styles from '../constants/Styles';
import { Text, View } from '../components/Themed';

const { Container, Row, Col } = Styles

export default function TabTwoScreen() {
  return (
    <View style={Container}>
      <View style={Row}>
        <View style={Col}>
          <View>
            <FontAwesome name="gear" size={25}/>
          </View>
        </View>
        <View style={Col}>
          <View>
            <FontAwesome name="camera" size={25}/>
          </View>
        </View>
        <View style={Col}>
          <View>
            <FontAwesome name="pencil" size={25}/>
          </View>
         </View>
      </View>
      <View style={Row}>
        {/* <Image /> */}
      </View>
      <View style={Row}>
        <View style={Col}>
          <View><span>Matthew</span><span>25</span></View>
          <View>Marketing Coordinator</View>
          <View>University Of Central Florida</View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
