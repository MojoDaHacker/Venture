import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import EditInfoScreen from "../screens/EditInfoScreen";
import MediaScreen from "../screens/MediaScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { SettingsParamList } from "../types";

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const Settings = createStackNavigator<SettingsParamList>();

export default function SettingsNavigator() {
  return (
    <Settings.Navigator initialRouteName="Info" headerMode="none">
      <Settings.Screen name="Info" component={EditInfoScreen} />
      <Settings.Screen name="Media" component={MediaScreen} />
      <Settings.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />
      {/* <Settings.Screen
        name="ChangeSettings"
        component={SettingsScreen}
      /> */}
    </Settings.Navigator>
  );
}
