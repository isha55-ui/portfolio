import React from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import ContactScreen from "./screens/ContactScreen";

import {
  ThemeProvider,
  useTheme,
} from "./context/ThemeContext";

export type RootStackParamList = {
  Home: undefined;
  Projects: undefined;
  Contact: undefined;
};

const Stack =
  createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  const { isDark } = useTheme();

  return (
    <NavigationContainer
      theme={
        isDark
          ? DarkTheme
          : DefaultTheme
      }
    >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Projects"
          component={ProjectsScreen}
        />

        <Stack.Screen
          name="Contact"
          component={ContactScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}