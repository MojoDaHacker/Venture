import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Badge from '../components/AboutMeBadges';

const Layout = () => {
  
  return (
    <ImageBackground style={{flex: 1}} source={require('../assets/images/pic1.jpg')}>
      <SafeAreaView>
        <View style={indicators}>
          <Badge num={2} />
          <Badge num={4} />
          <Badge num={6} />
        </View>
      </SafeAreaView>
      <View style={main}></View>
      <View style={info}>
        
      </View>
    </ImageBackground>
  )
}

export default Layout

const main = {
  flex: 8,
  backgroundColor: 'transparent'
}
const info = {
  // flex: 1,
  backgroundColor: 'blue'
}
const indicators = {
  // flex: 1,
  flexDirection: 'row',
  justifyContent: 'center'
}