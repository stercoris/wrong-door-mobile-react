// @refresh reset
import { __EnumValue } from "graphql";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { MessageInput } from "@Views/MessageInput/MessageInput";
import { ChatMessagesContext } from "@ContextProviders/ApiProviders/ChatMessagesProvider";
import { LogsMessagesContext } from "@ContextProviders/ApiProviders/LogsMessagesProvider";
import { UserContext } from "@ContextProviders/ApiProviders/UserInfoProvider";
import { LogsMessagesScrollView } from "./Container/logMessagesScrollView";

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

	return (
		<View style={styles.view}>
			<View style={styles.chat}>
				<LogsMessagesScrollView messages={logMessages} />
			</View>
		</View>
	);
};
