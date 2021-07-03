import React from "react";
import { Image, StyleSheet, View } from "react-native";

const profile = StyleSheet.create({
	profileBox: {
		flex: 1,
		display: "flex",
		flexDirection: "column-reverse",
	},

	imageWrapper: {
		width: 60,
		height: 60,
	},

	image: {
		borderRadius: 50,
		width: "100%",
		height: "100%",
	},
});

interface WDIconProps {
	image: string;
}

export const WDIcon: React.FC<WDIconProps> = ({ image }) => (
	<View style={profile.profileBox}>
		<View style={profile.imageWrapper}>
			<Image source={{ uri: image }} style={profile.image} />
		</View>
	</View>
);
