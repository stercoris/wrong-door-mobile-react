// @refresh reset
import { __EnumValue } from "graphql";
import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { UserContext } from "../../ContextProviders/ContextProvider";
import {
  ChatMessage,
  useAddChatMessageMutation,
  useGetChatMessagesLazyQuery,
  useGetChatMessagesQuery,
  useGetUsersLazyQuery,
  useGetUsersQuery,
  User,
  useSubsribeToNewMessagesSubscription,
} from "../../types";
import { Center } from "../../views/Center";
import { Message } from "./ChatMessage";
import { MessageInput } from "./MessageInput";

interface ChatProps {}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#000",
    //paddingTop: 25,
  },

  chat: {
    flex: 7,
    flexDirection: "column",
  },

  input: {
    height: 80,
  },
});

function messagesConverter(
  users: User[],
  ...messages: ChatMessage[]
): JSX.Element[] {
  const MessagesComponents: JSX.Element[] = [];
  let prevId = 0;
  messages.map((message) => {
    const user = users.find((user) => user.id === message.userId);

    const isStacked = message.userId === prevId;

    prevId = message.userId;

    if (user) {
      MessagesComponents.push(
        <Message
          message={message}
          user={user}
          isStacked={isStacked}
          key={message.id}
        />
      );
    }
  });
  return MessagesComponents;
}

export const ChatView: React.FC<ChatProps> = () => {
  const [Messages, SetMessages] = useState<JSX.Element[]>([]);
  // const { user } = useContext(UserContext); // Тут будет userId (или в аутентификации)
  const [sendMessage] = useAddChatMessageMutation();
  const newMessage = useSubsribeToNewMessagesSubscription();
  const Users = useGetUsersQuery();
  const Chat = useGetChatMessagesQuery({ variables: { id: 0 } });
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollViewRef) {
      scrollViewRef.current?.scrollToEnd({ animated: false });
    }
  }, [Messages]);

  useEffect(() => {
    if (Chat.data?.Messages && Users.data?.Users) {
      const newMessageComponents = messagesConverter(
        Users.data?.Users,
        ...Chat.data?.Messages
      );
      SetMessages([...Messages, ...newMessageComponents]);
    }
  }, [Chat.loading]);

  useEffect(() => {
    if (newMessage.data?.newMessage && Users.data?.Users) {
      const newMessageComponents = messagesConverter(
        Users.data?.Users,
        newMessage.data?.newMessage
      );
      SetMessages([...Messages, ...newMessageComponents]);
    }
  }, [newMessage.data?.newMessage]);

  if (Chat.loading || Users.loading) {
    return (
      <Center>
        <Text>Loading</Text>
      </Center>
    );
  }

  let prevId = 0;
  return (
    <View style={styles.view}>
      <View style={styles.chat}>
        <ScrollView ref={scrollViewRef}>{Messages}</ScrollView>
      </View>

      <View style={styles.input}>
        <MessageInput
          sendClick={(message) => {
            sendMessage({ variables: { message: { message, userId: 8 } } });
          }}
        />
      </View>
    </View>
  );
};
