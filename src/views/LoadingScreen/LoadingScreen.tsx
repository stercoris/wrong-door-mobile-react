import React from "react";
import { Center } from "@Views/Center";
import { ActivityIndicator } from "react-native";

export const LoadingScreen: React.FC = () => (
	<Center>
		<ActivityIndicator animating={true} color="white" size="large" />
	</Center>
);
