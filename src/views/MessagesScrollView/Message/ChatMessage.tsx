import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ChatMessage, User } from "@Api";
import { MessageBox } from "./TextView/MessageTextView";
import { WDIcon } from "@Views/WDComponents/WDIcon/WDIcon";
import { UserContext } from "@ContextProviders/ApiProviders/UserInfoProvider";

const s = StyleSheet.create({
	container: {
		alignItems: "center",
		display: "flex",
	},
	message: {
		flex: 10,
	},
	userIcon: {
		height: "100%",
		flexDirection: "column-reverse",
		display: "flex",
		alignItems: "center",
	},
});

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
	return (
		<View
			style={[
				s.container,
				{
					flexDirection: isSelfMessage ? "row-reverse" : "row",
					marginVertical: !isUserProfileShown ? 5 : 10,
				},
			]}
		>
			<View
				style={[
					s.message,
					{
						marginRight: isSelfMessage ? 30 : 0,
						flexDirection: isSelfMessage ? "row" : "row-reverse",
					},
				]}
			>
				<MessageBox message={message} />
			</View>

			<View
				style={[
					s.userIcon,
					{
						flex: !isUserProfileShown ? 1 : 3,
					},
				]}
			>
				{isUserProfileShown && <WDIcon image={user.image!} />}
			</View>
		</View>
	);
};
