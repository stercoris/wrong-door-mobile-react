// @refresh reset
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { MessageInput } from "@Views/MessageInput/MessageInput";
import { isMessageValid } from "../../../Helpers/isMessageValid";
import { ChatMessagesContext } from "@ContextProviders/ApiProviders/ChatMessagesProvider";
import { ChatScrollView } from "./Message/chatScrollView";

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
				<ChatScrollView messages={messages} />
			</View>

			<View style={styles.input}>
				<MessageInput
					isMessageValid={isMessageValid}
					sendMessage={(message: string) => sendChatMessage(message)}
				/>
			</View>
		</View>
	);
};
