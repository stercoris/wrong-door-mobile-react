import { LogsMessage, User } from "@Api";
import { convertDateTimeToCoolString } from "@Helpers/dateTimeConverter";
import { WDTextBubble } from "@Views/WDComponents/WDTextBubble/WDTextBubble";
import React from "react";
import { StyleSheet, View } from "react-native";

const s = StyleSheet.create({
	container: {
		display: "flex",
	},
	message: {
		flex: 1,
		marginHorizontal: 15,
		marginVertical: 10,
	},
});

export interface LogsMessageViewProps {
	message: LogsMessage;
}

export const LogsMessageView: React.FC<LogsMessageViewProps> = ({
	message,
}) => {
	return (
		<View style={s.container}>
			<View style={s.message}>
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
