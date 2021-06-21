import {
	ChatMessage,
	useAddChatMessageMutation,
	useDeleteChatMessageMutation,
	useGetChatMessagesQuery,
	useSubsribeToDeletedMessagesSubscription,
	useSubsribeToNewMessagesSubscription,
} from "@Api";
import React, { useEffect, useState } from "react";

export const ChatMessagesContext = React.createContext<{
	messages: ChatMessage[];
	isLoaded: boolean;
	send: (message: string, userId: number) => Promise<void>;
	delete: (messageId: number) => Promise<void>;
}>({
	messages: [],
	isLoaded: false,
	send: async () => {},
	delete: async () => {},
});

interface ChatMessagesProviderProps {}

export const ChatMesssagesProvider: React.FC<ChatMessagesProviderProps> = ({
	children,
}) => {
	const [isLoaded, setLoaded] = useState<boolean>(false);
	const [sendMessage] = useAddChatMessageMutation();
	const [deleteMessage] = useDeleteChatMessageMutation();

	const [messages, setMessages] = useState<ChatMessage[]>([]);

	const deletedMessage = useSubsribeToDeletedMessagesSubscription();
	const Chat = useGetChatMessagesQuery({ variables: { id: 0 } });
	const newMessage = useSubsribeToNewMessagesSubscription();

	useEffect(() => {
		const incomingMessages = Chat.data?.Messages;
		if (incomingMessages) {
			setMessages([...messages, ...incomingMessages]);
			setLoaded(true);
		}
	}, [Chat.loading]);

	useEffect(() => {
		const deletedM = deletedMessage.data?.deletedMessage;

		const messagesWithDeleted = messages.filter(
			(messageEl) => messageEl.id != deletedM?.id
		);

		setMessages(messagesWithDeleted);
	}, [deletedMessage.data?.deletedMessage]);

	useEffect(() => {
		const newM = newMessage.data?.newMessage;
		if (newM) {
			setMessages([...messages, newM]);
		}
	}, [newMessage.data?.newMessage]);

	return (
		<ChatMessagesContext.Provider
			value={{
				messages,
				isLoaded,
				send: async (message: string, userId: number) => {
					await sendMessage({
						variables: { message: { message: message.trim(), userId } },
					});
				},
				delete: async (messageId: number) => {
					await deleteMessage({ variables: { id: messageId } });
				},
			}}
		>
			{children}
		</ChatMessagesContext.Provider>
	);
};
