import React, { useRef, useState } from "react";
import { Button, StyleSheet, TouchableHighlight, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useAddChatMessageMutation } from "../../Api/types";

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

interface MessageInputProps {
	isMessageValid: (message: string) => boolean;
	sendMessage: (message: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({
	isMessageValid,
	sendMessage,
}) => {
	const [messageBody, setMesasgeBody] = useState<string>("");

	const Send = () => {
		sendMessage(messageBody.trim());
		setMesasgeBody("");
	};

	return (
		<View style={styles.view}>
			<TextInput
				style={styles.input}
				onAccessibilityAction={() => console.log("onAccessibilityAction")}
				onAccessibilityEscape={() => console.log("onAccessibilityEscape")}
				onAccessibilityTap={() => console.log("onAccessibilityTap")}
				onEndEditing={() => console.log("onAccessibilityTap")}
				placeholder={"Message"}
				placeholderTextColor={"#555555"}
				value={messageBody}
				onChangeText={setMesasgeBody}
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
