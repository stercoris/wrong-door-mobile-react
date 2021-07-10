import { ChatMessage, User } from "@Api";
import { WDIcon } from "@Views/WDComponents/WDIcon/WDIcon";
import { WDTextBubble } from "@Views/WDComponents/WDTextBubble/WDTextBubble";
import React from "react";
import { StyleSheet, View } from "react-native";

const s = StyleSheet.create({
	container: {
		alignItems: "center",
		display: "flex",
	},
	message: {
		flex: 1,
		marginHorizontal: 15,
	},
});

export interface ChatMessageViewProps {
	user?: User;
	isSelfMessage: boolean;
	message: ChatMessage;
}

export const ChatMessageView: React.FC<ChatMessageViewProps> = ({
	isSelfMessage,
	user,
	message,
}) => {
	return (
		<View
			style={[
				s.container,
				{
					flexDirection: isSelfMessage ? "row" : "row-reverse",
					marginVertical: user ? 10 : 5,
				},
			]}
		>
			{user?.image && <WDIcon image={user.image} />}
			<View
				style={[
					s.message,
					{ flexDirection: isSelfMessage ? "row" : "row-reverse" },
				]}
			>
				<WDTextBubble body={message.message} upper={message.time} />
			</View>
		</View>
	);
};
