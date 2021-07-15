import React from 'react'
import { View, Text } from './Themed'
import { StyleSheet, Image } from 'react-native'
import Window from '../constants/Layout'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AboutMeBadge from '../components/AboutMeBadges'

const {window} = Window

const InfoCard = props => {

  return (
    <View style={{padding: 12, margin: 6, width: '100%', borderRadius: 25}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', margin: 12 }}>
        <AboutMeBadge num={4}/>
        <AboutMeBadge num={5}/>
        <AboutMeBadge num={2}/>
      </View>
      <View>
        <Text style={{margin: 6}}>
          What is your favorite adventure?
        </Text>
        <Text style={{margin: 6}}>
          Going skydiving!
        </Text>
      </View>
    </View>
  )
}
export default InfoCard

const styles = StyleSheet.create({
})