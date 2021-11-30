import {
  LogsMessage,
  LogsMessageInput,
  useAddLogMessageMutation,
  useDeleteLogMessageMutation,
  useGetLogMessagesQuery,
  useSubscribeToDeletedLogMessagesSubscription,
  useSubscribeToNewLogMessagesSubscription,
} from "@Api";
import React, { useEffect, useState } from "react";
import сonnectEntityToGraphql from "./common/baseReactiveContext";

interface LogMessagesContextType {
  logMessages: LogsMessage[];
  isLoaded: boolean;
  send: (logMessage: LogsMessageInput) => Promise<void>;
  delete: (logId: number) => Promise<void>;
}

const LogMessagesContextDefaultState: LogMessagesContextType = {
  logMessages: [],
  isLoaded: false,
  send: async () => {},
  delete: async () => {},
};

export const LogsMessagesContext = React.createContext<LogMessagesContextType>(
  LogMessagesContextDefaultState
);

interface LogsMessagesProviderProps {}

export const LogMessagesProvider: React.FC<LogsMessagesProviderProps> = ({
  children,
}) => {
  const { data: all } = useGetLogMessagesQuery({ variables: { id: 0 } });
  const { data: subscribeNew } = useSubscribeToNewLogMessagesSubscription();
  const { data: subscribeDelete } =
    useSubscribeToDeletedLogMessagesSubscription();

  const { entities: logMessages, isLoaded } = сonnectEntityToGraphql({
    allEntities: all?.Logs,
    deletedIncomingEntity: subscribeNew?.newLogMessage,
    newIncomingEntity: subscribeDelete?.deletedLogMessage,
  });

  const [sendLogMessageRawMutation] = useAddLogMessageMutation();
  const sendMutation = async (logMessage: LogsMessageInput) => {
    await sendLogMessageRawMutation({ variables: { log: logMessage } });
  };

  const [deleteLogMessageRawMutation] = useDeleteLogMessageMutation();
  const deleteMutation = async (logMessageId: number) => {
    await deleteLogMessageRawMutation({ variables: { id: logMessageId } });
  };

  const context: LogMessagesContextType = {
    logMessages,
    isLoaded,
    send: sendMutation,
    delete: deleteMutation,
  };

  return (
    <LogsMessagesContext.Provider value={context}>
      {children}
    </LogsMessagesContext.Provider>
  );
};
