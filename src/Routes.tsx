import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { React } from "@ungap/global-this";
import { ChatView } from "./views/Chat";

interface RouteProps {}

const Stack = createStackNavigator();

export const Routes: React.FC<RouteProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chat" component={ChatView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
