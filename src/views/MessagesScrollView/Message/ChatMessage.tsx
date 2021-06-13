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
	isUserProfileShown?: boolean;
}

export const Message: React.FC<MessageProps> = ({
	message,
	user,
	isSelfMessage = false,
	isUserProfileShown = false,
}) => {
	if (user.id === 8) isSelfMessage = true;

	return (
		<View
			style={{
				flexDirection: isSelfMessage ? "row-reverse" : "row",
				alignItems: "center",
				display: "flex",
				marginVertical: !isUserProfileShown ? 5 : 10,
			}}
		>
			<View style={{ flex: 10, marginRight: 30 }}>
				<MessageBox message={message} />
			</View>

			<View
				style={{
					flex: !isUserProfileShown ? 1 : 3,
					height: "100%",
					flexDirection: "column-reverse",
					display: "flex",
					alignItems: "center",
				}}
			>
				{isUserProfileShown && <UserIcon user={user} />}
			</View>
		</View>
	);
};
