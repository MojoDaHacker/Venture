import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { useSelector } from "react-redux";

import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import EventNavigator from "./EventNavigator";
import SettingsNavigator from "./SettingsNavigator";
import LandingNavigator from "./LandingNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import ConversationNavigator from "./ConversationNavigator";
import EventsScreenHeader from "../components/EventsScreenHeader";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { isSignedIn } = useSelector((state) => state.currentUser);

  return (
    <Stack.Navigator initialRouteName="Venture" screenOptions={{ headerShown: false }}>
      {isSignedIn ? (
        <>
          <Stack.Screen name="Venture" component={BottomTabNavigator}/>
          <Stack.Screen name="Event" component={EventNavigator} />
          <Stack.Screen
            name="Conversation"
            component={ConversationNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Settings" component={SettingsNavigator} />
        </>
      ) : (
        <Stack.Screen
          name="Landing"
          component={LandingNavigator}
          options={{ headerShown: false }}
        />
      )}
      {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} /> */}
    </Stack.Navigator>
  );
}
