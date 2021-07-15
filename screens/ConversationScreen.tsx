import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Styles from '../constants/Styles';
import { Text, View } from '../components/Themed';

export default function ConversationScreen() {
  const messages = [1,2,3,4,5,6,7,8,9,0,11,22,334,546,57,86,]
  const [userText, setUserText] = useState("")

  const styleFunc = (el ,i) => {
    return el === 'container' ? (
      i % 2 == 0 ? {flexDirection: 'row-reverse'} : {flexDirection: 'row'}
    ) : (
      i % 2 == 0 ? {backgroundColor: 'lightgray', borderBottomEndRadius: 0} : {backgroundColor: 'lightgreen',  borderBottomStartRadius: 0}
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1}}>
        <ScrollView contentContainerStyle={{width: '100%'}}>
          {messages.map((val, i) => (
            <View key={i} style={[styles.messageContainer, styleFunc('container', i)]}>
              {/* <Image style={styles.roundedPic} source={require('../assets/images/pic1.jpg')} /> */}
              <View style={[styles.message, styleFunc('text', i)]}>
                <Text>Hey How are you doing?</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{flexShrink: 1, padding: 6, flexDirection: 'row', alignItems: 'center', borderTopWidth: 1}}>
        <FontAwesome style={{margin: 6}} name="camera" size={24} color="black" />
        <TextInput style={{ borderWidth: 1, padding: 12, borderRadius: 50, flex: 1}} placeholder="Type message..." onChangeText={setUserText} value={userText} />
        <FontAwesome style={{margin: 6}} name="microphone" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
  },
  roundedPic: {
    width: 25,
    height: 25,
    borderRadius: 100
  },
  message: {
    maxWidth: '75%',
    borderRadius: 15,
    margin: 12,
    padding: 12,
  },
});
