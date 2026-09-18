import {
  Dimensions
} from "react-native";

import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const { width } = Dimensions.get("window");


export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>

      <Tabs.Screen name="home" options={{ 
        tabBarInactiveTintColor:"#1B4242",
        tabBarActiveTintColor:Colors.primaryTint,
        title: "Home", tabBarIcon: ({ color, focused }) => (
        <Ionicons
            name={focused ? "home" : "home-outline"}
            size={24}
            color={color}
        />
      ), }}  />

      <Tabs.Screen name="wallet" options={{ 
        tabBarInactiveTintColor:"#1B4242",
        tabBarActiveTintColor:Colors.primaryTint,
        title: "Wallet", tabBarIcon: ({ color, focused }) => (
        <Ionicons
            name={focused ? "wallet" : "wallet-outline"}
            size={24}
            color={color}
        />
      ), }}  />

      <Tabs.Screen name="notification" options={{ 
        tabBarInactiveTintColor:"#1B4242",
        tabBarActiveTintColor:Colors.primaryTint,
        title: "Notification", tabBarIcon: ({ color, focused }) => (
        <Ionicons
            name={focused ? "notifications" : "notifications-outline"}
            size={24}
            color={color}
        />
      ), }}  />
      
      <Tabs.Screen name="profile" options={{ 
        tabBarInactiveTintColor:"#1B4242",
        tabBarActiveTintColor:Colors.primaryTint,
        title: "Profile", tabBarIcon: ({ color, focused }) => (
        <Ionicons
            name={focused ? "person" : "person-outline"}
            size={24}
            color={color}
        />
      ), }}  />
    </Tabs>
  );
}