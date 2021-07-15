import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import MessagesScreen  from '../screens/MessagesScreen';
import ProfileScreen  from '../screens/ProfileScreen';
import SwipeScreen  from '../screens/SwipeScreen';
// import SwipeScreen  from '../layouts/FullScreenSwipe';
import { MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList } from '../types';


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Swipe"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors[colorScheme].tint,
        style: {
          position: 'relative',
          backgroundColor: 'white',
          borderTopColor: 'transparent',
        }
      }}
    >
      <BottomTab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="message" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Swipe"
        component={SwipeScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="compass-rose" size={36} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="gear" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
