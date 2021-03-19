import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { UserContext } from "../ContextProvider/ContextProvider";
import { Center } from "../views/Center";
import { Message } from "./ChatMessage";
import { ChatMessage, GetChatMessages } from "../resolvers/ChatResolver";
import { GetUsers, User } from "../resolvers/UsersResolver";

interface ChatProps {}

const styles = StyleSheet.create({
  messageBox: {
    borderRightColor: "#00FF37",
    borderRightWidth: 20,
  },

  chat: {
    flex: 1,
    flexDirection: "row",
    height: 90,
  },

  view: {
    backgroundColor: "#000",
    paddingTop: 25,
  },
});

export const ChatView: React.FC<ChatProps> = () => {
  const { user } = useContext(UserContext);
  const Users = GetUsers();
  const Chat = GetChatMessages();
  const scrollViewRef = useRef<ScrollView>(null);
  let prevId = 0;

  // useEffect(() => {
  //   scrollViewRef!.current!.scrollToEnd({ animated: true });
  // }, [scrollViewRef]);

  if (Chat.loading || Users.loading) {
    return (
      <Center>
        <Text>Loading</Text>
      </Center>
    );
  }

  return (
    <ScrollView style={styles.view} ref={scrollViewRef}>
      {Chat.data?.Messages.map((message) => {
        const user = Users.data?.Users.find(
          (user) => user.id === message.userId
        );
        const isStacked = message.userId === prevId;
        prevId = message.userId;
        if (user) {
          return (
            <Message message={message} user={user} isStacked={isStacked} />
          );
        }
      })}
    </ScrollView>
  );
};
