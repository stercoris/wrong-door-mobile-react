import React from "react";
import { useContext } from "react";
import { Text } from "react-native";
import { Center } from "@Views/Center";
import { UserContext } from "@ContextProviders/ApiProviders/UserInfoProvider";

interface LogsProps {}

export const LogsView: React.FC<LogsProps> = () => {
	const { user } = useContext(UserContext);

	return (
		<Center>
			<Text>This is logs view</Text>
		</Center>
	);
};
