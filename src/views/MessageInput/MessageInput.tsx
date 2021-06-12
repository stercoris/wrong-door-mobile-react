import React, { useRef, useState } from "react";
import { Button, StyleSheet, TouchableHighlight, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useAddChatMessageMutation } from "../../Api/types";
import { isMessageValid } from "./messageIsValid";

const styles = StyleSheet.create({
	view: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#002222",
	},

	input: {
		flex: 5,
		color: "white",
		padding: 10,
		fontSize: 20,
	},

	sendButton: {
		flex: 1,
		justifyContent: "center",
	},
});

interface MessageInputProps {}

export const MessageInput: React.FC<MessageInputProps> = () => {
	const [messageBody, setMesasgeBody] = useState<string>("");
	const [sendMessage] = useAddChatMessageMutation();

	const Send = () => {
		sendMessage({
			variables: {
				message: { message: messageBody.trim(), userId: 8 },
			},
		});
		setMesasgeBody("");
	};

	return (
		<View style={styles.view}>
			<TextInput
				style={styles.input}
				placeholder={"Message"}
				placeholderTextColor={"#555555"}
				value={messageBody}
				onChangeText={(text) => setMesasgeBody(text)}
			/>
			<View style={styles.sendButton}>
				<TouchableHighlight
					onPress={Send}
					disabled={!isMessageValid(messageBody)}
					style={{
						height: "100%",
						display: "flex",
						opacity: isMessageValid(messageBody) ? 1 : 0.3,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Ionicons
						name={isMessageValid(messageBody) ? "send" : "remove-circle"}
						size={30}
						color={"#fff"}
					/>
				</TouchableHighlight>
			</View>
		</View>
	);
};
