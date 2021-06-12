// @refresh reset
import { __EnumValue } from "graphql";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { wrapScrollView } from "react-native-scroll-into-view";
import { MesssagesView } from "@Views/MessagesScrollView/MesssagesView";
import { MessageInput } from "@Views/MessageInput/MessageInput";

const CustomScrollView = wrapScrollView(ScrollView);

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
	return (
		<View style={styles.view}>
			<View style={styles.chat}>
				<CustomScrollView>
					<MesssagesView />
				</CustomScrollView>
			</View>

			<View style={styles.input}>
				<MessageInput />
			</View>
		</View>
	);
};
