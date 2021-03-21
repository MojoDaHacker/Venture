import { Entypo } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MessagesScreen from '../screens/MessagesScreen';
import ConversationScreen from '../screens/ConversationScreen';
import { MessagesParamList } from '../types';


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const Messages = createStackNavigator<MessagesParamList>();



export default function MessagesNavigator() {
  return (
    <Messages.Navigator headerMode="none">
      <Messages.Screen
        name="Messages"
        component={MessagesScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
      <Messages.Screen
        name="Conversation"
        component={ConversationScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </Messages.Navigator>
  );
}