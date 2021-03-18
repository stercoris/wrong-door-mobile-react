import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { ChatView } from "./views/Chat";

interface RouteProps {}

const Stack = createStackNavigator();

function HelloWorld() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

export const Routes: React.FC<RouteProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chat" component={HelloWorld} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
