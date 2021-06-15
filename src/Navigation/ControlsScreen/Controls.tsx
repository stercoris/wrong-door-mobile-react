import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// ---- TABS ----
import { ChatView } from "@Tabs/ControlsScreen/Chat/Chat";
import { LogsView } from "@Tabs/ControlsScreen/Logs/Logs";
import { ButtonsView } from "@Tabs/ControlsScreen/Buttons/Buttons";
import { RoomsRouter } from "@Tabs/ControlsScreen/Rooms/RoomsRouter";
// ---- TABS ----

interface ControlsProps {}

const Tab = createBottomTabNavigator();

export const Controls: React.FC<ControlsProps> = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => {
				const Icons = {
					[ControlsTabs.Chat]: ["chatbubble-sharp", "chatbubble-outline"],
					[ControlsTabs.Logs]: ["ios-warning", "ios-warning-outline"],
					[ControlsTabs.Buttons]: ["grid", "grid-outline"],
					[ControlsTabs.Rooms]: ["camera", "camera-outline"],
				};

				return {
					tabBarIcon: ({ focused, color, size }) => {
						const routeAsTab = ControlsTabs[route.name as ControlsTabs];

						const iconName = Icons[routeAsTab][focused ? 0 : 1];

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
			<Tab.Screen name={ControlsTabs.Chat} component={ChatView} />
			<Tab.Screen name={ControlsTabs.Logs} component={LogsView} />
			<Tab.Screen name={ControlsTabs.Buttons} component={ButtonsView} />
			<Tab.Screen name={ControlsTabs.Rooms} component={RoomsRouter} />
		</Tab.Navigator>
	);
};

enum ControlsTabs {
	Chat = "Chat",
	Logs = "Logs",
	Buttons = "Buttons",
	Rooms = "Rooms",
}
