import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { UserInfoProvider } from "@ContextProviders/ContextProvider";

// ---- TABS ----
import { ChatView } from "@Tabs/Chat/Chat";
import { LogsView } from "@Tabs/Logs/Logs";
import { ButtonsView } from "@Tabs/Buttons/Buttons";
import { RoomsRouter } from "@Tabs/Rooms/RoomsRouter";
import { LogInView } from "./LogInScreen/LogInScreen";
import { ChatMesssagesProvider } from "@ContextProviders/ChatMessagesProvider";
// ---- TABS ----

interface RouteProps {}

const Tab = createBottomTabNavigator();

export const Routes: React.FC<RouteProps> = () => {
	return (
		<UserInfoProvider>
			<ChatMesssagesProvider>
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={({ route }) => {
							const Icons = {
								[Tabs.Chat]: ["chatbubble-sharp", "chatbubble-outline"],
								[Tabs.Logs]: ["ios-warning", "ios-warning-outline"],
								[Tabs.Buttons]: ["grid", "grid-outline"],
								[Tabs.Rooms]: ["camera", "camera-outline"],
							};

							return {
								tabBarIcon: ({ focused, color, size }) => {
									const routeTab = Tabs[route.name as Tabs];

									let iconName = Icons[routeTab][focused ? 0 : 1];

									// @ts-ignore
									return <Ionicons name={iconName} size={size} color={color} />;
								},
							};
						}}
						tabBarOptions={{
							activeTintColor: "tomato",
							inactiveTintColor: "gray",
							activeBackgroundColor: "#000",
							inactiveBackgroundColor: "#000",
						}}
						sceneContainerStyle={{
							backgroundColor: "black",
						}}
					>
						<Tab.Screen name={Tabs.Chat} component={ChatView} />
						<Tab.Screen name={Tabs.Logs} component={LogsView} />
						<Tab.Screen name={Tabs.Buttons} component={LogInView} />
						<Tab.Screen name={Tabs.Rooms} component={RoomsRouter} />
					</Tab.Navigator>
				</NavigationContainer>
			</ChatMesssagesProvider>
		</UserInfoProvider>
	);
};

enum Tabs {
	Chat = "Chat",
	Logs = "Logs",
	Buttons = "Buttons",
	Rooms = "Rooms",
}
