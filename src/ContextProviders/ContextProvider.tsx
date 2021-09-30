import { UsersProvider } from "@ContextProviders/ApiProviders/UsersProvider";
import React from "react";
import { ChatMesssagesProvider } from "./ApiProviders/ChatMessagesProvider";
import { CommandsProvider } from "./ApiProviders/CommandsProvider";
import { LogMessagesProvider } from "./ApiProviders/LogsMessagesProvider";
import { UserInfoProvider } from "./ApiProviders/UserInfoProvider";

interface ContextProviderProps {}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  return (
    <UsersProvider>
      <UserInfoProvider>
        <CommandsProvider>
          <LogMessagesProvider>
            <ChatMesssagesProvider>{children}</ChatMesssagesProvider>
          </LogMessagesProvider>
        </CommandsProvider>
      </UserInfoProvider>
    </UsersProvider>
  );
};
