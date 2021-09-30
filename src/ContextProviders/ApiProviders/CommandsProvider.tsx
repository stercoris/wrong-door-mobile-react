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
import ConnectEntityToGraphql from "./common/baseReactiveContext";

interface CommandsContextType {
  commands: Command[];
  isLoaded: boolean;
  send: (command: CommandInput) => Promise<void>;
  delete: (commandId: number) => Promise<void>;
}

const CommandsContextDefaultState: CommandsContextType = {
  commands: [],
  isLoaded: false,
  send: async () => {},
  delete: async () => {},
};

export const CommandsContext = React.createContext<CommandsContextType>(
  CommandsContextDefaultState
);

interface CommandsProviderProps {}

export const CommandsProvider: React.FC<CommandsProviderProps> = ({
  children,
}) => {
  const { data: all } = useGetCommandsQuery();
  const { data: subscribeNew } = useSubscribeToDeletedCommandSubscription();
  const { data: subscribeDelete } = useSubscribeToNewCommandsSubscription();

  const { entities: commands, isLoaded } = ConnectEntityToGraphql({
    allEntities: all?.Commands,
    deletedIncomingEntity: subscribeNew?.deletedCommand,
    newIncomingEntity: subscribeDelete?.newCommand,
  });

  const [sendCommandRawMutation] = useAddCommandMutation();
  const sendMutation = async (command: CommandInput) => {
    await sendCommandRawMutation({ variables: { command } });
  };

  const [deleteCommandRawMutation] = useDeleteCommandMutation();
  const deleteMutation = async (commandId: number) => {
    await deleteCommandRawMutation({ variables: { id: commandId } });
  };

  const context: CommandsContextType = {
    commands,
    isLoaded,
    send: sendMutation,
    delete: deleteMutation,
  };

  return (
    <CommandsContext.Provider value={context}>
      {children}
    </CommandsContext.Provider>
  );
};
