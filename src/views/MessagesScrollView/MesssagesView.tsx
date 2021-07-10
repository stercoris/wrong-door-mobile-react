// @refresh reset
import React, { useContext, useEffect, useRef } from "react";
import { ScrollView, Text, View } from "react-native";
import { useGetUsersQuery } from "@Api";
import { Message, convertMessages } from "./messageConverter";
import { UserContext } from "@ContextProviders/ApiProviders/UserInfoProvider";

interface MessagesViewProps {
	messages: Message[];
}

export const MesssagesView: React.FC<MessagesViewProps> = ({ messages }) => {
	const Users = useGetUsersQuery();
	const refScrollView = useRef<ScrollView>(null);
	const { user } = useContext(UserContext);

	const { current: scrollView } = refScrollView;
	useEffect(() => scrollView?.scrollToEnd({ animated: false }), [messages]);

	return (
		<ScrollView ref={refScrollView}>
			{convertMessages(Users.data?.Users!, user?.id!, ...messages)}
		</ScrollView>
	);
};
