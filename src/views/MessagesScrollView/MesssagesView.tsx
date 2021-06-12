// @refresh reset
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, View } from "react-native";
import { useScrollIntoView } from "react-native-scroll-into-view";
import {
	useGetChatMessagesQuery,
	useGetUsersQuery,
	useSubsribeToDeletedMessagesSubscription,
	useSubsribeToNewMessagesSubscription,
} from "../../Api/types";
import { messagesConverter } from "./messageConverter";

interface MessagesViewProps {}

export const MesssagesView: React.FC<MessagesViewProps> = () => {
	const Users = useGetUsersQuery();
	const deletedMessage = useSubsribeToDeletedMessagesSubscription();
	const scrollViewRef = useRef<ScrollView>(null);
	const [Messages, SetMessages] = useState<JSX.Element[]>([]);
	const newMessage = useSubsribeToNewMessagesSubscription();
	const Chat = useGetChatMessagesQuery({ variables: { id: 0 } });
	const scrollIntoView = useScrollIntoView();

	const scrollToMessage = async (messageid: number) => {
		const message = Messages.find(
			(message) => message.key == messageid
		) as unknown as View;
		scrollIntoView(message);
	};

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

	return <>{Messages}</>;
};
