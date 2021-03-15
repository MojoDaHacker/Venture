import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { MessagesNavigator, MessagesIcon } from './MessagesNavigator';
import { SettingsNavigator, SettingsIcon }  from './SettingsNavigator';
import { ProfileNavigator, ProfileIcon }  from './ProfileNavigator';
import { SwipeNavigator, SwipeIcon }  from './SwipeNavigator';

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
          backgroundColor: 'white',
          borderTopColor: 'transparent',
        }
      }}
    >
      <BottomTab.Screen
        name="Swipe"
        component={SwipeNavigator}
        options={{
          tabBarIcon: ({ color }) => <SwipeIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesNavigator}
        options={{
          tabBarIcon: ({ color }) => <MessagesIcon name="message" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <ProfileIcon name="person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
