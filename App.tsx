import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ActivityIndicator, SafeAreaView } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import EventsScreen from "./screens/EventsScreen";
import EventDetailScreen from "./screens/EventDetailsScreen";

import store from "./store/store";
import { Provider } from "react-redux";

import AuthContext from "./contexts/FirebaseAuth";
import ConfirmEventScreen from "./screens/EventDetailsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./constants/Colors";
import ConversationScreen from "./screens/ConversationScreen";
import {
  useFonts,
  Lato_100Thin,
  Lato_400Regular,
  Lato_300Light,
} from "@expo-google-fonts/lato";
import EventBillingScreen from "./screens/EventBillingScreen";
import PaymentMethodSelectionScreen from "./screens/PaymentMethodSelectionScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ReportScreen from "./screens/ReportScreen";
import { TouchableOpacity, View } from "./components/Themed";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="small" color="#9999999" />;
  }

  if (!isLoadingComplete) {
    return <ActivityIndicator size="small" color="#9999999" />;
  } else {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AuthContext>
            {/* <SafeAreaProvider> */}
            <SafeAreaView style={{ flex: 1 }}>
              <Navigation colorScheme={colorScheme} />
              {/* <EventsScreen /> */}
              {/* <EventDetailScreen /> */}
              {/* <ConfirmEventScreen /> */}
              {/* <LoginScreen /> */}
              {/* <RegisterScreen /> */}
              {/* <ConversationScreen  /> */}
              {/* <EventDetailScreen /> */}
              {/* <EventBillingScreen /> */}
              {/* <PaymentMethodSelectionScreen /> */}
              {/* <ConfirmEventScreen /> */}
              {/* <MessagesScreen /> */}
              {/* <ProfileScreen /> */}
              {/* <SettingsScreen /> */}
              {/* <ReportScreen /> */}
              {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>
                <TouchableOpacity style={{ width: 200, height: 100, backgroundColor: "#78cc3f"}} />
                <TouchableOpacity style={{ width: 200, height: 100, backgroundColor: "#71F5EA"}} />
                <TouchableOpacity style={{ width: 200, height: 100, backgroundColor: "#F2FA07"}} />
                <TouchableOpacity style={{ width: 200, height: 100, backgroundColor: "#C70808"}} />
              </View> */}
            </SafeAreaView>
            <StatusBar />
          </AuthContext>
        </ThemeProvider>
      </Provider>
    );
  }
}
