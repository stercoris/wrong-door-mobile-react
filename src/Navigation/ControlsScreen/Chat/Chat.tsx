// @refresh reset
import { __EnumValue } from "graphql";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { MesssagesView } from "@Views/MessagesScrollView/MesssagesView";
import { MessageInput } from "@Views/MessageInput/MessageInput";
import { isMessageValid } from "./Message/isMessageValid";
import {
	ChatMessagesContext,
	ChatMesssagesProvider,
} from "@ContextProviders/ApiProviders/ChatMessagesProvider";

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: "#000",
		display: "flex",
	},

	chat: {
		flex: 1,
		flexDirection: "column",
	},

	input: {
		height: 50,
	},
});

interface ChatProps {}

export const ChatView: React.FC<ChatProps> = () => {
	const { messages, send: sendChatMessage } = useContext(ChatMessagesContext);

	return (
		<View style={styles.view}>
			<View style={styles.chat}>
				<MesssagesView messages={messages} />
			</View>

			<View style={styles.input}>
				<MessageInput
					isMessageValid={isMessageValid}
					sendMessage={(message: string) => sendChatMessage(message, 8)}
				/>
			</View>
		</View>
	);
};
