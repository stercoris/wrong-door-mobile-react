import React from "react";
import { useContext } from "react";
import { Text, View } from "react-native";
import { Center } from "@Views/Center";
import { UserContext } from "@ContextProviders/ApiProviders/UserInfoProvider";

interface ButtonsProps {}

export const ButtonsView: React.FC<ButtonsProps> = () => {
	const { user } = useContext(UserContext);

	return (
		<Center>
			<Text>This is buttons view</Text>
		</Center>
	);
};
