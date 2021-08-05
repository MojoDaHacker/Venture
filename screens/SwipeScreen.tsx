import React, { useState } from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Window from '../constants/Layout'
import SwipeCard from '../components/SwipeCard'
import { Ionicons } from '@expo/vector-icons';
import InfoCard from '../components/InfoCard';

const {window} = Window

export default function SwipeScreen(props) {
  const [scrollViewY, setScrollViewY] = useState(0)
  const cards = [1,2,3,4,5]
  const scroll = ({nativeEvent: { contentOffset }}) => {
    setScrollViewY(contentOffset.y)
  }
  const { navigation } = props

  return (
    <SafeAreaView edges={['top']} style={styles.screen}>
      {/* <TouchableHighlight style={styles.controlsContainer} underlayColor="blue">
        <Ionicons name="refresh" size={30} color="black"/>
      </TouchableHighlight> */}
      <ScrollView style={styles.carousel} contentContainerStyle={{display: 'flex', alignItems: 'center'}}>
        {cards.map((val, i) => (
          <SwipeCard key={`a${i}`} scrollY={scrollViewY} navigate={navigation.navigate}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative'
  },
  notesContainer: {
    position: 'absolute',
    paddingHorizontal: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: -1,
  },
  carousel: {
    position: 'relative',
    padding: 12
  },
  controlsContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    flex: 1,
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
    zIndex: 5
  },
  controls: {
    margin: 6,
    padding: 6,
    backgroundColor: "white",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: .34,
    shadowRadius: 6.27,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    height: '100%',

  }
})
