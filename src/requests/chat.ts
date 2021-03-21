import { gql } from "@apollo/client";

export const GET_CHAT_MESSAGES = gql`
  query($id: Int!) {
    Messages(id: $id) {
      message
      userId
      time
      id
    }
  }
`;

export const ADD_CHAT_MESSAGE = gql`
  mutation($message: ChatMessageInput!) {
    AddMessage(message: $message) {
      id
      userId
      message
      time
    }
  }
`;

export const SUBSCRIBE_TO_CHAT_MESSAGE = gql`
  subscription {
    newMessage {
      id
      userId
      message
      time
    }
  }
`;

export const DELETE_CHAT_MESSAGE = gql`
  mutation($id: Int!) {
    DeleteMessage(id: $id)
  }
`;
