import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
	useGetChatMessagesQuery,
	useGetUsersQuery,
	useSubsribeToDeletedMessagesSubscription,
	useSubsribeToNewMessagesSubscription,
} from "../../../types";
import { Center } from "../../../views/Center";
import { messagesConverter } from "./messageConverter";

interface MessagesViewProps {}

export const MesssagesView: React.FC<MessagesViewProps> = () => {
	const Users = useGetUsersQuery();
	const deletedMessage = useSubsribeToDeletedMessagesSubscription();
	const scrollViewRef = useRef<ScrollView>(null);
	const [Messages, SetMessages] = useState<JSX.Element[]>([]);
	const newMessage = useSubsribeToNewMessagesSubscription();
	const Chat = useGetChatMessagesQuery({ variables: { id: 0 } });

	useEffect(() => {
		scrollViewRef.current?.scrollToEnd({ animated: true });
	}, [Messages]);

	useEffect(() => {
		const deletedM = deletedMessage.data?.deletedMessage;
		const messages_with_deleted = Messages.filter((messageEl) => {
			return Number(messageEl.key) != Number(deletedM?.id);
		});
		SetMessages(messages_with_deleted);
	}, [deletedMessage.data?.deletedMessage]);

	useEffect(() => {
		const incomingMessages = Chat.data?.Messages;
		if (incomingMessages && Users.data?.Users) {
			const newMessageComponents = messagesConverter(
				Users.data?.Users,
				...incomingMessages
			);
			SetMessages([...Messages, ...newMessageComponents]);
		}
	}, [Chat.loading]);

	useEffect(() => {
		const newM = newMessage.data?.newMessage;
		if (newM && Users.data?.Users) {
			const newMessageComponents = messagesConverter(Users.data?.Users, newM);
			SetMessages([...Messages, ...newMessageComponents]);
		}
	}, [newMessage.data?.newMessage]);

	if (Chat.loading || Users.loading) {
		return (
			<Center>
				<Text>Loading</Text>
			</Center>
		);
	}

	return <ScrollView ref={scrollViewRef}>{Messages}</ScrollView>;
};
