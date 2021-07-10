import { ChatMessage, useGetUsersQuery, User } from "@Api";
import {
	UserContext,
	UserInfoProvider,
} from "@ContextProviders/ApiProviders/UserInfoProvider";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ChatMessageView, ChatMessageViewProps } from "./Message/chatMessage";

const s = StyleSheet.create({});

interface ChatScrollViewProps {
	messages: ChatMessage[];
}

const indexMessages = (
	messages: ChatMessage[],
	users: User[],
	thisUser: User
): ChatMessageViewProps[] => {
	return messages.map((message, i, msgs) => {
		const isPrevMessageExist = () => i > 0;
		const isNextMessageExists = () => i < msgs.length - 1;
		const getNextMessage = () => msgs[i + 1];

		const getUserIfSctacked = (): User | undefined => {
			const sender = users.find((u) => u.id === message.userId);
			if (!isPrevMessageExist() || !isNextMessageExists()) return sender;
			if (getNextMessage().userId !== message.userId) return sender;
		};

		const user = getUserIfSctacked();
		return {
			user,
			isSelfMessage: thisUser.id === message.userId,
			message,
			key: message.id,
		};
	});
};

export const ChatScrollView: React.FC<ChatScrollViewProps> = ({
	messages: rawMessages,
}) => {
	const Users = useGetUsersQuery();
	const { user } = useContext(UserContext);
	const [users, setUsers] = useState<User[]>([]);

	const allUsersQuery = Users.data?.Users;
	useEffect(() => {
		allUsersQuery && setUsers(allUsersQuery);
	}, [allUsersQuery]);

	const indexedMessages = indexMessages(rawMessages, users, user!);

	return (
		<ScrollView>
			{indexedMessages.map((message) => (
				<ChatMessageView {...message} />
			))}
		</ScrollView>
	);
};
