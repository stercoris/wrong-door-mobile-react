import React from "react";
import { useContext } from "react";
import { Text, View } from "react-native";
import { UserContext } from "@ContextProviders/ContextProvider";
import { Center } from "@Views/Center";

interface ButtonsProps {}

export const ButtonsView: React.FC<ButtonsProps> = () => {
	const { user } = useContext(UserContext);

	return (
		<Center>
			<Text>This is buttons view</Text>
		</Center>
	);
};
