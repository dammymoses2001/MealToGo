import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeView } from "./src/components/utilies/safe-area.component";
import { Ionicons } from "@expo/vector-icons";

import { restaurantsRequest } from "./src/services/restaurants/restaurants.service";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
// console.log(StatusBar.currentHeight);

const Map = () => {
  return (
    <SafeView>
      <View>
        <Text>Map</Text>
      </View>
    </SafeView>
  );
};

const SettingsScreen = () => {
  return (
    <SafeView>
      <View>
        <Text>Settings!</Text>
      </View>
    </SafeView>
  );
};

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "map",
  Settings: "md-settings",
};

const Tab = createBottomTabNavigator();

// const tabBarIcon = () => <Ionicons name={iconName} size={size} color={color} />;

const screenOptions = ({ route }) => {
  let iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ color, size }) => {
      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  };
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        {/* <RestaurantsScreen /> */}
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
