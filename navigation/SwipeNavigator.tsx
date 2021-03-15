import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import SwipeScreen from '../screens/SwipeScreen';
import { SwipeParamList } from '../types';

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
export function SwipeIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const SwipeStack = createStackNavigator<SwipeParamList>();

export function SwipeNavigator() {
  return (
    <SwipeStack.Navigator headerMode="none">
      <SwipeStack.Screen
        name="Swipe"
        component={SwipeScreen}
      />
    </SwipeStack.Navigator>
  );
}