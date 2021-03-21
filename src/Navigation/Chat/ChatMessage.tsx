import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ChatMessage, User } from "../../types";
import { Center } from "../../views/Center";

const messageContainer = StyleSheet.create({
  messageText: {
    color: "#fff",
    fontSize: 20,
  },
  messageBox: {
    borderColor: "#00FF37",
    backgroundColor: "#333336",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderStyle: "solid",
    flexDirection: "column",
    maxHeight: 120,
    flex: 1,
    borderRadius: 20,
  },
});

const profile = StyleSheet.create({
  usernameText: {
    color: "#fff",
  },

  profileBox: {
    flexDirection: "column",
    width: 120,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },

  image: {
    borderRadius: 50,
    width: 60,
    height: 60,
    alignSelf: "center",
  },
});

interface MessageProps {
  message: ChatMessage;
  user: User;
  isSelfMessage?: boolean;
  isStacked?: boolean;
}

export const Message: React.FC<MessageProps> = ({
  message,
  user,
  isSelfMessage = false,
  isStacked = false,
}) => {
  if (user.id === 8) isSelfMessage = true;
  return (
    <View
      style={{
        flexDirection: isSelfMessage ? "row-reverse" : "row",
        marginTop: isStacked ? 10 : 20,
      }}
    >
      <View>
        {!isStacked && (
          <View style={profile.profileBox}>
            <Image
              source={{ uri: user.image as string }}
              style={profile.image}
            />
            <Text style={profile.usernameText} numberOfLines={1}>
              {user.username}
            </Text>
          </View>
        )}
      </View>

      <View
        style={[
          messageContainer.messageBox,
          {
            borderLeftWidth: isSelfMessage ? 0 : 2,
            borderRightWidth: isSelfMessage ? 2 : 0,
          },
        ]}
      >
        <Text
          style={{
            fontSize: 10,
            color: "#fff",
          }}
        >
          {new Date(message.time).toLocaleTimeString()}{" "}
          {new Date(message.time).toDateString()}
        </Text>
        <Text style={messageContainer.messageText}>{message.message}</Text>
      </View>
    </View>
  );
};
