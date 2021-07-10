import { LogsMessage, useGetUsersQuery, User } from "@Api";
import { UserContext } from "@ContextProviders/ApiProviders/UserInfoProvider";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { LogsMessageView } from "./Message/logMessage";

const s = StyleSheet.create({});

interface LogsMessagesScrollViewProps {
	messages: LogsMessage[];
}

export const LogsMessagesScrollView: React.FC<LogsMessagesScrollViewProps> = ({
	messages: rawMessages,
}) => {
	const Users = useGetUsersQuery();
	const { user } = useContext(UserContext);
	const [users, setUsers] = useState<User[]>([]);

	const allUsersQuery = Users.data?.Users;
	useEffect(() => {
		allUsersQuery && setUsers(allUsersQuery);
	}, [allUsersQuery]);

	return (
		<ScrollView>
			{rawMessages.map((message) => (
				<LogsMessageView message={message} key={message.id} />
			))}
		</ScrollView>
	);
};
