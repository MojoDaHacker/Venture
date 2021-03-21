import React from 'react'
import { ScrollView, Image, Button, Alert } from 'react-native';
import { View, Text} from '../components/Themed';
import Dimensions from '../constants/Layout';

const ConfirmEventScreen = props => {
  const { window : { width, height }} = Dimensions

  return (
    <View style={{flex: 1}}>
      <View style={{ padding: 12, height: '100%', flex: 1, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'lightgray'}}>
        <Text style={{ margin: 12 }}>Event Title</Text>
        <Image resizeMode="cover" style={{flex: 1, borderRadius: 15, width: '75%', height: '100%'}} source={require('../assets/images/event1.jpeg')}/>
      </View>
      <View style={{flex: 2}}>
        <ScrollView bounces={false}>
          <View>
            <Text>Match Profile Pic</Text>
            <View style={{margin: 12, padding: 12}}>
              <Text>- 1 All Day Pass</Text>
              <Text>- 1 Board Rentals</Text>
            </View>
          </View>
          <View>
            <Text>Match Profile Pic</Text>
            <View style={{margin: 12, padding: 12}}>
              <Text>- 1 All Day Pass</Text>
              <Text>- 1 Board Rentals</Text>
            </View>
          </View>
        </ScrollView>
      <View style={{flexShrink: 1, margin: 12}}>
        <Text>Subtotal</Text>
        <Text>Fees</Text>
        <Text>Taxes</Text>
        <Text>Total</Text>
      </View>
      </View>
      <View style={{flexShrink: 1}}>
        <Button
          title="Continue to Payment"
          onPress={() => Alert.alert('Button Pressed!')}
        />
      </View>
    </View>

  )
}

export default ConfirmEventScreen