import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { appScreens } from "./lib/data";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={appScreens.default}>
        {appScreens.screens.map((screen, index) => (
          <Stack.Screen
            key={index}
            {...screen}
            options={({ route }) => ({ title: route.name })}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
