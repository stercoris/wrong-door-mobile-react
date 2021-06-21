import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Controls } from "./ControlsScreen/Controls";
import { LogInScreen } from "./LoadingScreen/LoadingScreen";

import { NavigationContainer } from "@react-navigation/native";
import { UserContext } from "@ContextProviders/ApiProviders/UserInfoProvider";
import { ChatMessagesContext } from "@ContextProviders/ApiProviders/ChatMessagesProvider";
import { CommandsContext } from "@ContextProviders/ApiProviders/CommandsProvider";

const Stack = createStackNavigator();

interface NavigationRouterProps {}

export const Navigation: React.FC<NavigationRouterProps> = ({}) => {
	const { isLoaded: isUsersLoaded } = useContext(UserContext);
	const { isLoaded: isChatLoaded } = useContext(ChatMessagesContext);
	const { isLoaded: isCommandsLoaded } = useContext(CommandsContext);

	const isAllLoaded = isUsersLoaded && isChatLoaded && isCommandsLoaded;

	return (
		<NavigationContainer>
			{isAllLoaded ? <Controls /> : <LogInScreen />}
		</NavigationContainer>
	);
};

export enum NavigationTabs {
	Controls = "controlsTab",
	Login = "loginTab",
}
