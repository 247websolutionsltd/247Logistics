import {
    Dimensions
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const { width } = Dimensions.get("window");


export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ 
        title: "Home", tabBarIcon: ({ color, focused }) => (
        <Ionicons
            name={focused ? "home" : "home-outline"}
            size={24}
            color={color}
        />
        ), }}  />
      {/* <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="categories" options={{ title: "Categories" }} />
      <Tabs.Screen name="saved" options={{ title: "Saved" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} /> */}
    </Tabs>
  );
}