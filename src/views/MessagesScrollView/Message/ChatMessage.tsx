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
} from "../../../Api/types";
import { UserIcon } from "./UserIcon/MessageUserIcon";
import { MessageBox } from "./TextView/MessageTextView";
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
				display: "flex",
				marginTop: isStacked ? 5 : 10,
			}}
		>
			{!isStacked && (
				<View
					style={{
						flex: 1,
					}}
				>
					<UserIcon user={user} />
				</View>
			)}

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
