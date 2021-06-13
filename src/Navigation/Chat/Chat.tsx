// @refresh reset
import { __EnumValue } from "graphql";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { wrapScrollView } from "react-native-scroll-into-view";
import { MesssagesView } from "@Views/MessagesScrollView/MesssagesView";
import { MessageInput } from "@Views/MessageInput/MessageInput";
import { isMessageValid } from "./Message/isMessageValid";
import {
	ChatMessage,
	useAddChatMessageMutation,
	useGetChatMessagesQuery,
	useSubsribeToDeletedMessagesSubscription,
	useSubsribeToNewMessagesSubscription,
} from "@Api";

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: "#000",
		display: "flex",
		position: "relative",
	},

	chat: {
		flex: 8,
		flexDirection: "column",
	},

	input: {
		height: 50,
	},
});

interface ChatProps {}

export const ChatView: React.FC<ChatProps> = () => {
	const [sendMessage] = useAddChatMessageMutation();

	const [messages, setMessages] = useState<ChatMessage[]>([]);

	const deletedMessage = useSubsribeToDeletedMessagesSubscription();
	const Chat = useGetChatMessagesQuery({ variables: { id: 0 } });
	const newMessage = useSubsribeToNewMessagesSubscription();

	useEffect(() => {
		const incomingMessages = Chat.data?.Messages;
		if (incomingMessages) {
			setMessages([...messages, ...incomingMessages]);
		}
	}, [Chat.loading]);

	useEffect(() => {
		const deletedM = deletedMessage.data?.deletedMessage;

		const messages_with_deleted = messages.filter(
			(messageEl) => messageEl.id != deletedM?.id
		);

		setMessages(messages_with_deleted);
	}, [deletedMessage.data?.deletedMessage]);

	useEffect(() => {
		const newM = newMessage.data?.newMessage;
		if (newM) {
			setMessages([...messages, newM]);
		}
	}, [newMessage.data?.newMessage]);

	return (
		<View style={styles.view}>
			<View style={styles.chat}>
				<MesssagesView messages={messages} />
			</View>

			<View style={styles.input}>
				<MessageInput
					isMessageValid={isMessageValid}
					sendMessage={(message: string) =>
						sendMessage({
							variables: {
								message: {
									message,
									userId: 8,
								},
							},
						})
					}
				/>
			</View>
		</View>
	);
};
