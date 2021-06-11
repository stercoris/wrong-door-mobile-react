import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { User } from "../../../../../types";

const profile = StyleSheet.create({
	usernameText: {
		color: "#fff",
	},

	profileBox: {
		flexDirection: "column",
		width: 120,
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
	},

	image: {
		borderRadius: 50,
		width: 60,
		height: 60,
	},
});

interface UserIconProps {
	user: User;
}

export const UserIcon: React.FC<UserIconProps> = ({ user }) => {
	return (
		<View style={profile.profileBox}>
			<Image source={{ uri: user.image! }} style={profile.image} />
			<Text style={profile.usernameText} numberOfLines={1}>
				{user.username}
			</Text>
		</View>
	);
};
