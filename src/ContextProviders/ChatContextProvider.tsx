import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";

type Message = {
  id: number;
  userId: number;
  message: string;
  time: Date;
};

type MessageInput = {
  userId: number;
  message: string;
};

type Chat = null | {
  messages: Message[];
};

export const ChatContext = React.createContext<{
  chat: Chat;
  sendMessage: (message: MessageInput) => void;
}>({
  chat: null,
  sendMessage: (message: MessageInput) => {},
});

interface ChatContextProps {}

export const UserInfoProvider: React.FC<ChatContextProps> = ({ children }) => {
  const [chat, setChat] = useState<Chat>(null);
  return (
    <ChatContext.Provider
      value={{
        chat,
        sendMessage: (message: MessageInput) => {},
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

const GET_CHAT_MESSAGES = gql`
  query($id: Int!) {
    Messages(id: $id) {
      message
      userId
      time
      id
    }
  }
`;

interface ChatMessagesData {
  Messages: Message[];
}

interface ChatMessagesVars {
  id: number;
}

function GetChatMessages(id: number = 0) {
  return useQuery<ChatMessagesData, ChatMessagesVars>(GET_CHAT_MESSAGES, {
    variables: {
      id: id,
    },
  });
}
