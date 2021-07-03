import React, { useContext } from "react";
import { Text } from "react-native";
import { Center } from "@Views/Center";

interface YouNotRegistredProps {}

export const YouNotRegistredScreen: React.FC<YouNotRegistredProps> = () => {
	return (
		<Center>
			<Text style={{ color: "white" }}>Запроси доступ пидор</Text>
		</Center>
	);
};
