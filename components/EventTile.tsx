import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { View, Text } from './Themed';

const EventTile = props => {
  return (
    <View style={styles.tile}>
      <Text style={styles.tileTitle}>Title</Text>
      <Text>Trending Emoji</Text>
    </View>
  )
}

export default EventTile

const styles = StyleSheet.create({
  tile: {
    padding: 5,
    margin: 12,
    height: 150,
    flexDirection: 'column',
    borderWidth: 2,
    borderRadius: 10
  },
  tileTitle: {
    color: '#888',
    fontSize: 48,
    fontWeight: 'bold'
  }
});