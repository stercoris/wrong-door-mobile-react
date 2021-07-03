import { getLocalUserUUID } from "@Helpers/getDeviceId";
import React from "react";
import { ChatMessage, User } from "../../Api/types";
import { Message } from "./Message/ChatMessage";

export interface Message {
	id: number;
	userId: number;
	message: string;
	time: Date;
	deleted: boolean;
}

export function convertMessages(
	users: User[],
	userId: number,
	...messages: Message[]
): JSX.Element[] {
	return messages.map((message, i, allMessages) => {
		const user = users.find((user) => user.id === message.userId);

		const isLastMessage = () => i == allMessages.length - 1;
		const isNextMessageFromDifferentUser = () =>
			allMessages[i + 1].userId !== user!.id;

		let isStacked = false;

		isStacked = !isLastMessage() ? isNextMessageFromDifferentUser() : true;

		if (user) {
			return (
				<Message
					message={message}
					user={user}
					isUserProfileShown={isStacked}
					key={message.id}
					isSelfMessage={user.id === userId}
				/>
			);
		}
	}) as JSX.Element[];
}
