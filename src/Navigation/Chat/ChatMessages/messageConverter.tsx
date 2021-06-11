import React from "react";
import { ChatMessage, User } from "../../../types";
import { Message } from "./ChatMessage";

let prevId = 0;

export function messagesConverter(
	users: User[],
	...messages: ChatMessage[]
): JSX.Element[] {
	return messages.map((message) => {
		const user = users.find((user) => user.id === message.userId);

		prevId = message.userId;

		if (user) {
			return (
				<Message
					message={message}
					user={user}
					isStacked={message.userId === prevId}
					key={message.id}
				/>
			);
		}
	}) as JSX.Element[];
}
