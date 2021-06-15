import {
	Command,
	CommandInput,
	useAddCommandMutation,
	useDeleteCommandMutation,
	useGetCommandsQuery,
	useSubscribeToDeletedCommandSubscription,
	useSubscribeToNewCommandsSubscription,
} from "@Api";
import React, { useEffect, useState } from "react";

export const CommandsContext = React.createContext<{
	commands: Command[];
	send: (command: CommandInput) => Promise<void>;
	delete: (commandId: number) => Promise<void>;
}>({
	commands: [],
	send: async () => {},
	delete: async () => {},
});

interface CommandsProviderProps {}

export const CommandsProvider: React.FC<CommandsProviderProps> = ({
	children,
}) => {
	const [sendCommand] = useAddCommandMutation();
	const [deleteCommand] = useDeleteCommandMutation();

	const [commands, setCommands] = useState<Command[]>([]);

	const CommandsRequest = useGetCommandsQuery();
	const deletedCommand = useSubscribeToDeletedCommandSubscription();
	const newCommands = useSubscribeToNewCommandsSubscription();

	useEffect(() => {
		const reqCommands = CommandsRequest.data?.Commands;
		if (reqCommands) {
			setCommands([...commands, ...reqCommands]);
		}
	}, [CommandsRequest.loading]);

	useEffect(() => {
		const deletedM = deletedCommand.data?.deletedCommand;

		const messagesWithDeleted = commands.filter(
			(messageEl) => messageEl.id != deletedM?.id
		);

		setCommands(messagesWithDeleted);
	}, [deletedCommand.data?.deletedCommand]);

	useEffect(() => {
		const newM = newCommands.data?.newCommand;
		if (newM) {
			setCommands([...commands, newM]);
		}
	}, [newCommands.data?.newCommand]);

	return (
		<CommandsContext.Provider
			value={{
				commands,
				send: async (command: CommandInput) => {
					await sendCommand({
						variables: { command },
					});
				},
				delete: async (commandId: number) => {
					await deleteCommand({ variables: { id: commandId } });
				},
			}}
		>
			{children}
		</CommandsContext.Provider>
	);
};
