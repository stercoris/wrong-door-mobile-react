import React from "react";
import { TouchableHighlight } from "react-native";
import { useDeleteChatMessageMutation } from "@Api";
import { Ionicons } from "@expo/vector-icons";

interface DeleteMessageButton {
	id: number;
}

export const DeleteMessageButton: React.FC<DeleteMessageButton> = ({ id }) => {
	const [deleteMessage] = useDeleteChatMessageMutation();

	return (
		<TouchableHighlight
			onPress={() => deleteMessage({ variables: { id: id } })}
		>
			<Ionicons name={"trash-outline"} size={25} color={"#fff"} />
		</TouchableHighlight>
	);
};
