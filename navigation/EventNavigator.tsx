import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import useColorScheme from '../hooks/useColorScheme';
import { EventsParamList } from '../types';
import EventBillingScreen from '../screens/EventBillingScreen';
import PaymentMethodSelectionScreen from '../screens/PaymentMethodSelectionScreen';
import EventParticipantsScreen from '../screens/EventParticipantsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ConfirmedPurchaseScreen from '../screens/ConfirmedPurchaseScreen';


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const Events = createStackNavigator<EventsParamList>();

export default function EventsNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Events.Navigator
      // headerMode='none'
      initialRouteName='EventDetails'
      screenOptions={{
        headerBackTitleVisible: false
      }}
    >
      <Events.Screen name="PaymentSelection" component={PaymentMethodSelectionScreen} options={{ headerTitle: "Payment Selection" }} />
      <Events.Screen name="EventBilling" component={EventBillingScreen} options={{ headerTitle: "Billing" }} />
      <Events.Screen name="EventDetails" component={EventDetailsScreen} options={{ headerTitle: "Details" }} />
      <Events.Screen name="ConfirmedPurchase" component={ConfirmedPurchaseScreen} options={{ headerShown: false }} />
      <Events.Screen name="EventParticipants" component={EventParticipantsScreen} options={{ headerShown: true, headerTitle: "", headerBackTitleVisible: false }}/>
      <Events.Screen name="ParticipantProfile" component={ProfileScreen} options={{ headerShown: true, headerTitle: "", headerBackTitleVisible: false }}/>
    </Events.Navigator>
  );
}
