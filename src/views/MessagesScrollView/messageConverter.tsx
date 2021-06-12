import React from "react";
import { ChatMessage, User } from "../../Api/types";
import { Message } from "./Message/ChatMessage";

let prevId = 0;

export function messagesConverter(
	users: User[],
	...messages: ChatMessage[]
): JSX.Element[] {
	return messages.map((message) => {
		const user = users.find((user) => user.id === message.userId);

		const isStacked = message.userId === prevId;

		prevId = message.userId;

		if (user) {
			return (
				<Message
					message={message}
					user={user}
					isStacked={isStacked}
					key={message.id}
				/>
			);
		}
	}) as JSX.Element[];
}
