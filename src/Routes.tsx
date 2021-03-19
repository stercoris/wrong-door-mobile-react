import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ChatView } from "./Chat/Chat";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { LogsView } from "./Logs/Logs";
import { ButtonsView } from "./Buttons/Buttons";
import { RoomsRouter } from "./Rooms/RoomsRouter";

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
