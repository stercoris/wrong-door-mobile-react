import {
	ChatMessage,
	useAddChatMessageMutation,
	useDeleteChatMessageMutation,
	useGetChatMessagesQuery,
	useSubsribeToDeletedMessagesSubscription,
	useSubsribeToNewMessagesSubscription,
} from "@Api";
import React, { useContext } from "react";
import ConnectEntityToGraphql from "./common/baseReactiveContext";
import { UserContext } from "./UserInfoProvider";

interface ChatMessagesContextType {
	messages: ChatMessage[];
	isLoaded: boolean;
	send: (message: string) => Promise<void>;
	delete: (messageId: number) => Promise<void>;
}

const ChatMessagesContextFirstState: ChatMessagesContextType = {
	messages: [],
	isLoaded: false,
	send: async () => {},
	delete: async () => {},
};

export const ChatMessagesContext = React.createContext<ChatMessagesContextType>(
	ChatMessagesContextFirstState
);

interface ChatMessagesProviderProps {}

export const ChatMesssagesProvider: React.FC<ChatMessagesProviderProps> = ({
	children,
}) => {
	const { data: all } = useGetChatMessagesQuery({ variables: { id: 0 } });
	const { data: subscibeNew } = useSubsribeToNewMessagesSubscription();
	const { data: subscribeDelete } = useSubsribeToDeletedMessagesSubscription();

	const { entities: messages, isLoaded } = ConnectEntityToGraphql({
		allEntities: all?.Messages,
		deletedIncomingEntity: subscribeDelete?.deletedMessage,
		newIncomingEntity: subscibeNew?.newMessage,
	});

	const { user } = useContext(UserContext);
	const [sendMessageRawMutation] = useAddChatMessageMutation();
	const sendMutation = async (message: string) => {
		await sendMessageRawMutation({
			variables: { message: { message: message.trim(), userId: user?.id! } },
		});
	};

	const [deleteMessageRawMutation] = useDeleteChatMessageMutation();
	const deleteMutation = async (messageId: number) => {
		await deleteMessageRawMutation({ variables: { id: messageId } });
	};

	const context: ChatMessagesContextType = {
		messages,
		isLoaded,
		send: sendMutation,
		delete: deleteMutation,
	};

	return (
		<ChatMessagesContext.Provider value={context}>
			{children}
		</ChatMessagesContext.Provider>
	);
};
