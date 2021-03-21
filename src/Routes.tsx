import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ChatView } from "./Navigation/Chat/Chat";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { LogsView } from "./Navigation/Logs/Logs";
import { ButtonsView } from "./Navigation/Buttons/Buttons";
import { RoomsRouter } from "./Navigation/Rooms/RoomsRouter";

interface RouteProps {}

const Tab = createBottomTabNavigator();

export const Routes: React.FC<RouteProps> = ({}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === Tabs.Chat) {
              iconName = focused ? "chatbubble-sharp" : "chatbubble-outline";
            } else if (route.name === Tabs.Logs) {
              iconName = focused ? "ios-warning" : "ios-warning-outline";
            } else if (route.name === Tabs.Buttons) {
              iconName = focused ? "grid" : "grid-outline";
            } else if (route.name === Tabs.Rooms) {
              iconName = focused ? "camera" : "camera-outline";
            }
            // @ts-ignore
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          activeBackgroundColor: "#000",
          inactiveBackgroundColor: "#000",
        }}
      >
        <Tab.Screen name="Chat" component={ChatView} />
        <Tab.Screen name="Logs" component={LogsView} />
        <Tab.Screen name="Buttons" component={ButtonsView} />
        <Tab.Screen name="Rooms" component={RoomsRouter} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

enum Tabs {
  Chat = "Chat",
  Logs = "Logs",
  Buttons = "Buttons",
  Rooms = "Rooms",
}
