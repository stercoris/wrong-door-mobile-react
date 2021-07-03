import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Controls } from "./ControlsScreen/Controls";
import { LoadingScreen } from "./LoadingScreen/LoadingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

interface NavigationRouterProps {}

export const Navigation: React.FC<NavigationRouterProps> = ({}) => {
	return (
		<NavigationContainer>
			<View style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
				<LoadingScreen>
					<Controls />
				</LoadingScreen>
			</View>
		</NavigationContainer>
	);
};
