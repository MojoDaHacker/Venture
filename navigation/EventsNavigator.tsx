import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import EventsScreen from '../screens/EventsScreen';
import ConfirmEventScreen from '../screens/ConfirmEventScreen';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { EventsParamList } from '../types';


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const Events = createStackNavigator<EventsParamList>();

export default function EventsNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Events.Navigator
      headerMode='none'
      // tabBarOptions={{
      //   showLabel: false,
      //   activeTintColor: Colors[colorScheme].tint,
      //   style: {
      //     backgroundColor: 'white',
      //     borderTopColor: 'transparent',
      //   }
      // }}
    >
      <Events.Screen name="Events" component={EventsScreen} />
      <Events.Screen name="ConfirmEvent" component={ConfirmEventScreen} />
    </Events.Navigator>
  );
}
