import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import store from "./store/store";
import { Provider } from "react-redux";
import AuthContext from "./contexts/FirebaseAuth";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./constants/Colors";
import {
  useFonts,
  Lato_100Thin,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
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
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </AuthContext>
        </ThemeProvider>
      </Provider>
    );
  }
}
