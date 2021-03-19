import { gql, useQuery } from "@apollo/client";

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

export interface ChatMessage {
  id: number;
  userId: number;
  message: string;
  time: Date;
}

interface ChatMessagesData {
  Messages: ChatMessage[];
}

interface ChatMessagesVars {
  id: number;
}

export function GetChatMessages(id: number = 0) {
  return useQuery<ChatMessagesData, ChatMessagesVars>(GET_CHAT_MESSAGES, {
    variables: {
      id: id,
    },
  });
}
