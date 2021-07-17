import React from "react";
import { StyleSheet, Text, View } from "react-native";

const s = StyleSheet.create({
	container: {
		maxWidth: "100%",
		backgroundColor: "#333336",
		borderColor: "#00FF37",
		paddingHorizontal: 8,
		paddingVertical: 11,
		borderStyle: "solid",
		borderRadius: 10,
	},
	body: {
		color: "#fff",
		fontSize: 20,
	},
	upper: {
		color: "#fff",
		fontSize: 8,
	},
});

interface MWDTextBubbleProps {
	body: string;
	upper?: string;
}

export const WDTextBubble: React.FC<MWDTextBubbleProps> = ({ body, upper }) => {
	return (
		<View style={s.container}>
			<Text style={s.upper}>{upper}</Text>
			<Text style={s.body} selectable={true}>
				{body}
			</Text>
		</View>
	);
};
