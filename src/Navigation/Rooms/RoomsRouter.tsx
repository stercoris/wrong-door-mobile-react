import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { RoomsView } from "./Rooms";

function HelloWorld() {
  return (
    <View>
      <Text>Hello aaaaa</Text>
    </View>
  );
}
const Stack = createStackNavigator();

interface RoomsRouterProps {}

export const RoomsRouter: React.FC<RoomsRouterProps> = ({}) => {
  return (
    <Stack.Navigator
    // screenOptions={{ header: () => null }}
    >
      <Stack.Screen name="Rooms" component={RoomsView} />
      <Stack.Screen name="SelectedRoom" component={HelloWorld} />
    </Stack.Navigator>
  );
};
