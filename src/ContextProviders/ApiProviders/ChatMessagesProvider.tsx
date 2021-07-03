import {
	ChatMessage,
	useAddChatMessageMutation,
	useDeleteChatMessageMutation,
	useGetChatMessagesQuery,
	useSubsribeToDeletedMessagesSubscription,
	useSubsribeToNewMessagesSubscription,
} from "@Api";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserInfoProvider";

export const ChatMessagesContext = React.createContext<{
	messages: ChatMessage[];
	isLoaded: boolean;
	send: (message: string) => Promise<void>;
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
	const { user } = useContext(UserContext);
	const [sendMessageQuery] = useAddChatMessageMutation();
	const [deleteMessageQuery] = useDeleteChatMessageMutation();

	const [messages, setMessages] = useState<ChatMessage[]>([]);

	const deletedMessage = useSubsribeToDeletedMessagesSubscription();
	const Chat = useGetChatMessagesQuery({ variables: { id: 0 } });
	const newMessage = useSubsribeToNewMessagesSubscription();

	const addMessages = (...newMessages: ChatMessage[]) => {
		setMessages([...messages, ...newMessages]);
		setLoaded(true);
	};

	const deleteMessage = (messageId: number) => {
		const messagesWithDeleted = messages.filter(
			(messageEl) => messageEl.id != messageId
		);
		setMessages(messagesWithDeleted);
	};

	useEffect(() => {
		const allMessages = Chat.data?.Messages;
		if (allMessages) addMessages(...allMessages);
	}, [Chat.loading]);

	useEffect(
		() => deleteMessage(deletedMessage.data?.deletedMessage?.id!),
		[deletedMessage.data?.deletedMessage]
	);

	useEffect(() => {
		const newMessages = newMessage.data?.newMessage;
		if (newMessages) addMessages(newMessages);
	}, [newMessage.data?.newMessage]);

	return (
		<ChatMessagesContext.Provider
			value={{
				messages,
				isLoaded,
				send: async (message: string) => {
					await sendMessageQuery({
						variables: {
							message: { message: message.trim(), userId: user?.id! },
						},
					});
				},
				delete: async (messageId: number) => {
					await deleteMessageQuery({ variables: { id: messageId } });
				},
			}}
		>
			{children}
		</ChatMessagesContext.Provider>
	);
};
