import React from 'react'
import { View, Text } from './Themed'
import { StyleSheet, Image, TouchableHighlight } from 'react-native'
import Window from '../constants/Layout'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const {window} = Window

const SwipeCard = props => {

  return (
    <View style={styles.cardContainerWrapper}>
      <View style={styles.cardContainer}>
        <Image style={styles.img} source={require('../assets/images/pic1.jpg')} />
        {/* <TouchableHighlight style={styles.sendRequestIcon} underlayColor='blue' onPress={() => props.navigate('Events')}>
          <MaterialCommunityIcons name="compass-rose" size={25} color="black" />
        </TouchableHighlight> */}
      </View>
      <View style={styles.eventInfoContainer}>
          <Text style={{margin: 25, color: 'red'}}>SkyDiving</Text>
          <Text style={{margin: 25, color: 'red'}}>$15</Text>
        </View>
      <View style={styles.eventCrowdContainer}>
        <Image style={styles.smallImg} source={require('../assets/images/pic1.jpg')}/>
        <Image style={styles.smallImg} source={require('../assets/images/pic1.jpg')}/>
        <Image style={styles.smallImg} source={require('../assets/images/pic1.jpg')}/>
        <Image style={styles.smallImg} source={require('../assets/images/pic1.jpg')}/>
        <Image style={styles.smallImg} source={require('../assets/images/pic1.jpg')}/>
        <Image style={styles.smallImg} source={require('../assets/images/pic1.jpg')}/>
      </View>
    </View>
  )
}
export default SwipeCard

const styles = StyleSheet.create({
  eventInfoContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 1,
    position: 'absolute'
  },
  sendRequestIcon: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 100,
    position: 'absolute',
    right: 25,
    bottom: 25,
  },
  cardContainerWrapper: {        // needed to put shadow on img container
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: .7,
    borderRadius: 25,
    // marginTop: window.height * (.25 * .5),
    width: '100%',
    height: window.height * .75 ,
    margin: 35
  },
  cardContainer: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 25,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  eventCrowdContainer : {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "transparent",
    position: 'absolute',
    paddingHorizontal: 5,
    width: '100%',
    bottom: -35,
  },
  smallImg : {
    borderRadius: 50,
    width: 65,
    height: 65,
  }})