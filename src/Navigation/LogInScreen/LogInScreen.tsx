// @refresh reset
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Button } from "react-native";
import { UserContext } from "@ContextProviders/ContextProvider";
import { Center } from "@Views/Center";
import { ActivityIndicator } from "react-native";
import { LoadingScreen } from "@Views/LoadingScreen/LoadingScreen";

interface LogInProps {}

export const LogInView: React.FC<LogInProps> = () => {
	const { user, login } = useContext(UserContext);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (user != null) {
			setLoading(false);
		}
	}, [user]);

	if (loading) {
		return <LoadingScreen />;
	}

	return (
		<Center>
			<Button
				title="LogIn"
				onPress={() => {
					setLoading(true);
					login();
				}}
			/>
		</Center>
	);
};
