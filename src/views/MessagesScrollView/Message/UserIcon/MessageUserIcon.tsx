import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { User } from "@Api";

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

interface UserIconProps {
	user: User;
}

export const UserIcon: React.FC<UserIconProps> = ({ user }) => {
	if (!user.image) {
		return (
			<View>
				<Text>...</Text>
			</View>
		);
	}

	return (
		<View style={profile.profileBox}>
			<View style={profile.imageWrapper}>
				<Image source={{ uri: user.image }} style={profile.image} />
			</View>
		</View>
	);
};
