import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { User } from "../../../../Api/types";

const profile = StyleSheet.create({
	profileBox: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "stretch",
	},

	usernameText: {
		color: "#fff",
		flex: 1,
		alignSelf: "center",
	},

	imageWrapper: {
		flex: 10,
		width: "100%",
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
	return (
		<View style={profile.profileBox}>
			<View style={profile.imageWrapper}>
				<Image source={{ uri: user.image! }} style={profile.image} />
			</View>
			<Text style={profile.usernameText} numberOfLines={1}>
				{user.username}
			</Text>
		</View>
	);
};
