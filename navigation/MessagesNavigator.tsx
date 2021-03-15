import { Entypo } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MessagesScreen from '../screens/MessagesScreen';
import { MessagesParamList } from '../types';


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const MessagesStack = createStackNavigator<MessagesParamList>();

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
export function MessagesIcon(props: { name: React.ComponentProps<typeof Entypo>['name']; color: string }) {
  return <Entypo size={30} style={{ marginBottom: -3 }} {...props} />;
}


export function MessagesNavigator() {
  return (
    <MessagesStack.Navigator headerMode="none">
      <MessagesStack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </MessagesStack.Navigator>
  );
}