import React from 'react';
import { View, Text } from './Themed';

const AboutMeBadge = (props) => {

  const aboutOptions = [
    'Shy',
    'Adventurous',
    'Funny',
    'Ambitious',
    'Spontaneous',
    'Boring',
    'Outgoing',
    'Hesitant',
    'Fearless',
    'Reserved',
  ]
  const style = {
  
  }

  return (
    <View style={{backgroundColor: 'rgba(46, 236, 59, .5)', borderRadius: 100, padding: 12}}>
      <Text>{aboutOptions[props.num]}</Text>
    </View>
  )
}

export default AboutMeBadge