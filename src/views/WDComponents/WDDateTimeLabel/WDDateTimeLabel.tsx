import React from "react";
import { StyleSheet, Text } from "react-native";

const s = StyleSheet.create({
	label: {
		fontSize: 8,
		color: "#fff",
	},
});

interface WDDateTimeLabelProps {
	date: any;
	postfix: string;
}

export const WDDateTimeLabel: React.FC<WDDateTimeLabelProps> = ({
	date,
	postfix,
}) => {
	const localTime = new Date(date).toLocaleTimeString();
	const wmdy = new Date(date).toDateString();
	return (
		<Text style={s.label} selectable={true}>
			{localTime} {wmdy} {postfix}
		</Text>
	);
};
