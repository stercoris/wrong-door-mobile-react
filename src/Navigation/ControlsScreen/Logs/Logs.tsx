// @refresh reset
import { __EnumValue } from "graphql";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { MesssagesView } from "@Views/MessagesScrollView/MesssagesView";
import { MessageInput } from "@Views/MessageInput/MessageInput";
import { ChatMessagesContext } from "@ContextProviders/ApiProviders/ChatMessagesProvider";
import { LogsMessagesContext } from "@ContextProviders/ApiProviders/LogsMessagesProvider";
import { Message } from "@Views/MessagesScrollView/messageConverter";
import { UserContext } from "@ContextProviders/ApiProviders/UserInfoProvider";

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

export const LogsView: React.FC<ChatProps> = () => {
	const { logMessages } = useContext(LogsMessagesContext);

	// TODO: REWRITE ALL MESSAGES VIEW TO BE COMPATIBLE WITH THIS SHIT
	const { user } = useContext(UserContext);
	const kostyl = logMessages.map((lm) =>
		Object.assign({ userId: user?.id! }, lm)
	);

	return (
		<View style={styles.view}>
			<View style={styles.chat}>
				<MesssagesView messages={kostyl} />
			</View>
		</View>
	);
};
