import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import EventsScreen from '../screens/EventsScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { EventsParamList } from '../types';
import EventBillingScreen from '../screens/EventBillingScreen';
import PaymentMethodSelectionScreen from '../screens/PaymentMethodSelectionScreen';
import EventParticipantsScreen from '../screens/EventParticipantsScreen';
import ProfileScreen from '../screens/ProfileScreen';


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const Events = createStackNavigator<EventsParamList>();

export default function EventsNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Events.Navigator
      headerMode='none'
      initialRouteName='EventDetails'
      // tabBarOptions={{
      //   showLabel: false,
      //   activeTintColor: Colors[colorScheme].tint,
      //   style: {
      //     backgroundColor: 'white',
      //     borderTopColor: 'transparent',
      //   }
      // }}
    >
      <Events.Screen name="PaymentSelection" component={PaymentMethodSelectionScreen} />
      <Events.Screen name="EventBilling" component={EventBillingScreen} />
      <Events.Screen name="EventDetails" component={EventDetailsScreen} />
      <Events.Screen name="EventParticipants" component={EventParticipantsScreen} options={{ headerShown: true, headerTitle: "", headerBackTitleVisible: false }}/>
      <Events.Screen name="ParticipantProfile" component={ProfileScreen} options={{ headerShown: true, headerTitle: "", headerBackTitleVisible: false }}/>
    </Events.Navigator>
  );
}
