// @refresh reset
import React, { useEffect, useRef } from "react";
import { ScrollView, Text, View } from "react-native";
import { useGetUsersQuery } from "@Api";
import { Message, convertMessages } from "./messageConverter";

interface MessagesViewProps {
	messages: Message[];
}

export const MesssagesView: React.FC<MessagesViewProps> = ({ messages }) => {
	const Users = useGetUsersQuery();
	const scrollView = useRef<ScrollView>(null);

	useEffect(() => {
		if (scrollView) {
			scrollView.current?.scrollToEnd({ animated: false });
		}
	}, [messages]);

	if (Users.loading) {
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);
	}

	return (
		<ScrollView ref={scrollView}>
			{convertMessages(Users.data?.Users!, ...messages)}
		</ScrollView>
	);
};
