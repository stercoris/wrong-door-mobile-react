import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import {
	ChatMessage,
	useDeleteChatMessageMutation,
} from "../../../../Api/types";

const messageContainer = StyleSheet.create({
	messageText: {
		color: "#fff",
		fontSize: 20,
	},
	messageBox: {
		width: "fit-content",
		borderColor: "#00FF37",
		backgroundColor: "#333336",
		paddingHorizontal: 8,
		paddingVertical: 11,
		borderStyle: "solid",
		borderRadius: 15,
	},
});

interface MessageBoxProps {
	message: ChatMessage;
}

export const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
	return (
		<View style={messageContainer.messageBox}>
			<Text
				style={{
					fontSize: 8,
					color: "#fff",
				}}
				selectable={true}
			>
				{new Date(message.time).toLocaleTimeString()}{" "}
				{new Date(message.time).toDateString()}
				{"  "}ID:{message.id}
			</Text>
			<Text style={messageContainer.messageText} selectable={true}>
				{message.message}
			</Text>
		</View>
	);
};
