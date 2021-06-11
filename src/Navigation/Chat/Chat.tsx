// @refresh reset
import { __EnumValue } from "graphql";
import React from "react";
import { StyleSheet, View } from "react-native";
import { MesssagesView } from "./ChatMessages/MesssagesView";
import { MessageInput } from "./MessageInput/MessageInput";

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: "#000",
	},

	chat: {
		flex: 8,
		flexDirection: "column",
	},

	input: {
		height: 80,
	},
});

interface ChatProps {}

export const ChatView: React.FC<ChatProps> = () => {
	return (
		<View style={styles.view}>
			<View style={styles.chat}>
				<MesssagesView />
			</View>

			<View style={styles.input}>
				<MessageInput />
			</View>
		</View>
	);
};
