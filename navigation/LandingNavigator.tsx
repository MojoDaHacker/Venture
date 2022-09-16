import { Entypo } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LandingScreen from "../screens/LandingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { LandingParamList } from "../types";

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const Landing = createStackNavigator<LandingParamList>();

export default function LandingNavigator() {
  return (
    <Landing.Navigator
      initialRouteName="LandingRoot"
      screenOptions={{ headerBackTitleVisible: false, headerShown: true }}
    >
      <Landing.Screen name="LandingRoot" component={LandingScreen} options={{ headerShown: false }} />
      <Landing.Screen name="Login" component={LoginScreen} options={{ title: "" }} />
      <Landing.Screen name="Register" component={RegisterScreen} options={{ title: "" }} />
    </Landing.Navigator>
  );
}
