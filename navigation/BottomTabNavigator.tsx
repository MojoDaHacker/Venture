import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import MatchDetailsScreen  from '../screens/MatchDetailsScreen';
import MessagesScreen  from '../screens/MessagesScreen';
import ProfileScreen  from '../screens/SettingsScreen';
import SwipeScreen  from '../screens/SwipeScreen';
// import SwipeScreen  from '../layouts/FullScreenSwipe';
import { MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList } from '../types';
import EventsScreen from '../screens/EventsScreen';
import EventsScreenHeader from '../components/EventsScreenHeader';


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Events"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
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
        name="Events"
        component={EventsScreen}
        options={{
          header: (props) => <EventsScreenHeader {...props} />,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="compass-rose" size={36} color={color} />
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
