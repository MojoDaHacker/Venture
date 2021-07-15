import { Entypo } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import EditInfoScreen from '../screens/EditInfoScreen';
import MediaScreen from '../screens/MediaScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { SettingsParamList } from '../types';


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const Settings = createStackNavigator<SettingsParamList>();



export default function SettingsNavigator() {
  return (
    <Settings.Navigator headerMode="none">
      <Settings.Screen
        name="Info"
        component={EditInfoScreen}
      />
      <Settings.Screen
        name="Media"
        component={MediaScreen}
      />
      <Settings.Screen
        name="ChangeSettings"
        component={SettingsScreen}
      />
    </Settings.Navigator>
  );
}