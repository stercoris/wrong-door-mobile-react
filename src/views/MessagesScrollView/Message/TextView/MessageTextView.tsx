import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WDDateTimeLabel } from "@Views/WDComponents/WDDateTimeLabel/WDDateTimeLabel";

const s = StyleSheet.create({
	messageText: {
		color: "#fff",
		fontSize: 20,
	},
	messageBox: {
		width: "fit-content",
		borderColor: "#00FF37",
		backgroundColor: "#333336",
		paddingHorizontal: 8,
		paddingVertical: 11,
		borderStyle: "solid",
		borderRadius: 15,
	},
});

interface MessageBoxProps {
	message: {
		id: number;
		message: string;
		time: any;
	};
}

export const MessageBox: React.FC<MessageBoxProps> = ({
	message: { time, message, id },
}) => {
	return (
		<View style={s.messageBox}>
			<WDDateTimeLabel date={time} postfix={`ID:${id}`} />
			<Text style={s.messageText} selectable={true}>
				{message}
			</Text>
		</View>
	);
};
