// @refresh reset
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useGetUsersQuery } from "@Api";
import { Message, convertMessages } from "./messageConverter";
import { wrapScrollView } from "react-native-scroll-into-view";

interface MessagesViewProps {
	messages: Message[];
}

const CustomScrollView = wrapScrollView(ScrollView);

export const MesssagesView: React.FC<MessagesViewProps> = ({ messages }) => {
	const Users = useGetUsersQuery();

	if (Users.loading) {
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);
	}

	return (
		<CustomScrollView>
			{convertMessages(Users.data?.Users!, ...messages)}
		</CustomScrollView>
	);
};
