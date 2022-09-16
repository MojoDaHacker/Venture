import React from 'react';
import { Image} from 'react-native';
import { View, Text } from '../Themed';

const Event = props => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, padding: 6}}>
        <Image style={{width: '100%', height: '100%'}} source={require("../../assets/images/event1.jpeg")}/>
      </View>
      <View style={{flex: 3, flexDirection: 'row'}}>
        <View>
          <Text style={{margin: 6}}>Event Tiitle</Text>
          <Text style={{margin: 6}}>Event address</Text>
          <Text style={{margin: 6}}>Event description</Text>
        </View>
        <View>

        </View>
      </View>
    </View>
  )
}

export default Event