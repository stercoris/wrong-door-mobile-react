import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Controls } from "./ControlsScreen/Controls";
import { LogInScreen } from "./LogInScreen/LogInScreen";

import { NavigationContainer } from "@react-navigation/native";
import { UserContext } from "@ContextProviders/ApiProviders/UserInfoProvider";

const Stack = createStackNavigator();

interface NavigationRouterProps {}

export const Navigation: React.FC<NavigationRouterProps> = ({}) => {
	const { user } = useContext(UserContext);
	useEffect(() => {
		console.log("SAS");
	}, [user]);

	return (
		<NavigationContainer>
			{user ? <Controls /> : <LogInScreen />}
		</NavigationContainer>
	);
};

export enum NavigationTabs {
	Controls = "controlsTab",
	Login = "loginTab",
}
