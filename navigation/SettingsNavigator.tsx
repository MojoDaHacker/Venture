import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import SettingsScreen from '../screens/SettingsScreen';
import { SettingsParamList } from '../types';


// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
export function SettingsIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const SettingStack = createStackNavigator<SettingsParamList>();

export function SettingsNavigator() {
  return (
    <SettingStack.Navigator headerMode="none">
      <SettingStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </SettingStack.Navigator>
  );
}
