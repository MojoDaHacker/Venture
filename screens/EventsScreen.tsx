import React, { useState } from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import Window from '../constants/Layout'
import SwipeCard from '../components/SwipeCard'
import Event from '../components/Event'
import { Ionicons } from '@expo/vector-icons';
import InfoCard from '../components/InfoCard';

const {window} = Window

export default function EventsScreen(props) {
  const [scrollViewY, setScrollViewY] = useState(0)
  const events = [1,2,3,4,5,9,6,7,8,9,0,4,7,6,3,4,5,6,7,8,6,4,5]
  // const scroll = ({nativeEvent: {contentOffset}}) => {
  //   setScrollViewY(contentOffset.y)
  // }
  const filterBadges = [
    'Conventional',
    'Moderate',
    'Daring',
  ]

  return (
    <View style={styles.screen}>
      <View>
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', margin: 6 }} horizontal>
          <View style={{ margin: 6, padding: 12, backgroundColor: 'lightgreen', borderRadius: 100 }}><Text>Conventional</Text></View>
          <View style={{ margin: 6, padding: 12, backgroundColor: 'orange', borderRadius: 100 }}><Text>Moderate</Text></View>
          <View style={{ margin: 6, padding: 12, backgroundColor: 'red', borderRadius: 100 }}><Text>Daring</Text></View>
        </ScrollView>
      </View>
      <View style={{margin: 12}}>
        <Text>{events.length} Events</Text>
      </View>
      <ScrollView contentContainerStyle={{display: 'flex'}}>
        {events.map((val, i) => (
          <>
            <View style={{ borderTopWidth: 1, borderBottomWidth: 1 }}>
              <TouchableHighlight onPress={() => props.navigation.navigate('ConfirmEvent')}><Event key={i} /></TouchableHighlight>
            </View>
          </>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',

  }
})
