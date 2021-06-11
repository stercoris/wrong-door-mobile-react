import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from "react-native";
import {
	ChatMessage,
	useDeleteChatMessageMutation,
	User,
} from "../../../types";
import { UserIcon } from "./Message/UserIcon/MessageUserIcon";
import { MessageBox } from "./Message/MessageTextView";
import { DeleteMessageButton } from "./MessageButtons/DeleteButton";

interface MessageProps {
	message: ChatMessage;
	user: User;
	isSelfMessage?: boolean;
	isStacked?: boolean;
}

export const Message: React.FC<MessageProps> = ({
	message,
	user,
	isSelfMessage = false,
	isStacked = false,
}) => {
	if (user.id === 8) isSelfMessage = true;
	return (
		<View
			style={{
				flexDirection: isSelfMessage ? "row-reverse" : "row",
				alignItems: "center",
				flex: 1,
				marginTop: isStacked ? 5 : 10,
			}}
		>
			{!isStacked && <UserIcon user={user} />}
			<View style={{ flex: 7 }}>
				<MessageBox message={message} />
			</View>

			{isSelfMessage && (
				<View style={{ flex: 1, alignItems: "center" }}>
					<DeleteMessageButton id={message.id} />
				</View>
			)}
		</View>
	);
};
