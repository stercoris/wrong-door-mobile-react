import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ChatMessage, User } from "@Api";
import { WDIcon } from "@Views/WDComponents/WDIcon/WDIcon";
import { UserContext } from "@ContextProviders/ApiProviders/UserInfoProvider";
import { WDTextBubble } from "@Views/WDComponents/WDTextBubble/WDTextBubble";

const s = StyleSheet.create({
	container: {
		alignItems: "center",
		display: "flex",
	},
	message: {
		flex: 10,
	},
});

interface MessageProps {
	message: ChatMessage;
	user: User;
	isSelfMessage?: boolean;
	isUserProfileShown?: boolean;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
	return (
		<View style={s.container}>
			<View style={s.message}>
				<WDTextBubble body={message.message} upper={message.time} />
			</View>
		</View>
	);
};
