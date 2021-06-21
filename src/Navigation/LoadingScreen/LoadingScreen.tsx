// @refresh reset
import React from "react";
import { View } from "react-native";
import { LoadingIndicator } from "@Views/LoadingIndicator/LoadingScreen";

interface LoadingProps {}

export const LogInScreen: React.FC<LoadingProps> = () => {
	return (
		<View style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
			<LoadingIndicator />
		</View>
	);
};
