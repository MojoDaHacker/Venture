import * as React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, Image, ScrollView } from 'react-native';
import Window from '../constants/Layout'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const {window} = Window

export default function SwipeInterface(params: object) {
  return (
    <View style={styles.screen}>
      <View style={styles.controlsContainer}>
        <Ionicons name="refresh" size={30} color="black"/>
      </View>
      <ScrollView style={styles.carousel}>
        <View style={styles.imgContainerWrapper}>
          <View style={styles.imgContainer}>
            <Image resizeMode="cover" style={styles.img} source={require('../assets/images/pic1.jpg')} />
            <View style={styles.sendRequestIcon}>
              <MaterialCommunityIcons name="compass-rose" size={25} color="black" />
            </View>
          </View>
        </View>
        <View style={styles.imgContainerWrapper}>
          <View style={styles.imgContainer}>
            <Image resizeMode="cover" style={styles.img} source={require('../assets/images/pic1.jpg')} />
            <View style={styles.sendRequestIcon}>
              <MaterialCommunityIcons name="compass-rose" size={25} color="black" />
            </View>
          </View>
        </View>
        <View style={[styles.imgContainerWrapper, {marginBottom: window.height * (.25 * .5)}]}>
          <View style={styles.imgContainer}>
            <Image resizeMode="cover" style={styles.img} source={require('../assets/images/pic1.jpg')} />
            <View style={styles.sendRequestIcon}>
              <MaterialCommunityIcons name="compass-rose" size={25} color="black" />
            </View>
          </View>
        </View>
        {/* <Image resizeMode="cover" style={styles.img} source={require('../assets/images/pic2.jpg')} />
        <Image resizeMode="cover" style={styles.img} source={require('../assets/images/pic3.jpg')} /> */}
      </ScrollView>
      <View style={styles.notesContainer}>
        <Text>Hello!asdoiasndoansiodansdionsasdasdasdasdasdasdasdasdas</Text>
      </View>
    </View>
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
  sendRequestIcon: {
    padding: 12,
    borderRadius: 100,
    position: 'absolute',
    right: 25,
    bottom: 25,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 25,
    zIndex: 5
  },
  imgContainerWrapper: {        // needed to put shadow on img container
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: .7,
    borderRadius: 50,
    marginTop: window.height * (.25 * .5)
  },
  imgContainer: {
    position: 'relative',
    height: window.height * .75 ,
    overflow: 'hidden',
    borderRadius: 50,
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
