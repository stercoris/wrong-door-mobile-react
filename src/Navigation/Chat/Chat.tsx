import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { UserContext } from "../../ContextProviders/ContextProvider";
import { Center } from "../../views/Center";
import { Message } from "./ChatMessage";
import ChatResolver from "../../resolvers/ChatResolver";
import { GetUsers, User } from "../../resolvers/UsersResolver";
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

export const ChatView: React.FC<ChatProps> = () => {
  const { user } = useContext(UserContext);
  const Users = GetUsers();
  const Chat = ChatResolver.GetMessages();
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
    <View style={styles.view}>
      <View style={styles.chat}>
        <ScrollView>
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
      </View>

      <View style={styles.input}>
        <MessageInput />
      </View>
    </View>
  );
};
