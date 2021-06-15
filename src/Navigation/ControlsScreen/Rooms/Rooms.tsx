import React from "react";
import { useContext } from "react";
import { Text, View } from "react-native";
import { Center } from "@Views/Center";
import { UserContext } from "@ContextProviders/ApiProviders/UserInfoProvider";

interface RoomsProps {}

export const RoomsView: React.FC<RoomsProps> = () => {
	const { user } = useContext(UserContext);

	return (
		<Center>
			<Text>This is rooms view</Text>
		</Center>
	);
};
