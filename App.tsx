import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ActivityIndicator, SafeAreaView } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import EventsScreen from "./screens/EventsScreen";
import EventDetailScreen from "./screens/EventDetailScreen";

import store from "./store/store";
import { Provider } from "react-redux";

import AuthContext from "./contexts/FirebaseAuth";
import ConfirmEventScreen from "./screens/ConfirmEventScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./constants/Styles"

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return <ActivityIndicator size="small" color="#9999999" />;
  } else {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AuthContext>
            {/* <SafeAreaProvider> */}
            {/* <Navigation colorScheme={colorScheme} /> */}
            <SafeAreaView style={{ flex: 1 }}>
              {/* <EventsScreen /> */}
              {/* <EventDetailScreen /> */}
              {/* <ConfirmEventScreen /> */}
              <LoginScreen />
              {/* <RegisterScreen /> */}
            </SafeAreaView>
            <StatusBar />
            {/* </SafeAreaProvider> */}
          </AuthContext>
        </ThemeProvider>
      </Provider>
    );
  }
}
