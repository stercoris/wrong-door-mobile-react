import { ChatMessage, User } from "@Api";
import { convertDateTimeToCoolString } from "@Helpers/dateTimeConverter";
import { WDIcon } from "@Views/WDComponents/WDIcon/WDIcon";
import { WDTextBubble } from "@Views/WDComponents/WDTextBubble/WDTextBubble";
import React from "react";
import { StyleSheet, View } from "react-native";
import Images from "@Images";

const s = StyleSheet.create({
	container: {
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
	const userIsRepresentedButWithoudImage = user && user.image === null;
	const image = userIsRepresentedButWithoudImage
		? Images.UserDefaultImage
		: user?.image;
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
			{image && <WDIcon image={image} />}
			<View
				style={[
					s.message,
					{ flexDirection: isSelfMessage ? "row" : "row-reverse" },
				]}
			>
				<WDTextBubble
					body={message.message}
					upper={
						convertDateTimeToCoolString(message.time) + ` ID:${message.id}`
					}
				/>
			</View>
		</View>
	);
};
