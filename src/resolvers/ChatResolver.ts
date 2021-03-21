import { useQuery } from "@apollo/client";
import ChatMessage from "../entities/chat";
import { GET_CHAT_MESSAGES } from "../requests/chat";

interface AddChatMessagesVars {
  id: number;
}

interface ChatMessageInput {
  message: String;
  userId: number;
}

export default class ChatResolver {
  public static GetMessages(id: number = 0) {
    return useQuery<{ Messages: ChatMessage[] }, AddChatMessagesVars>(
      GET_CHAT_MESSAGES,
      {
        variables: {
          id: id,
        },
      }
    );
  }

  // public static SendMessage(message: ChatMessageInput) {
  // 	return useQuery<
  // }
}
