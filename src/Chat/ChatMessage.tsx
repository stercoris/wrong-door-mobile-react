import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Center } from "../views/Center";
import { ChatMessage } from "../resolvers/ChatResolver";
import { User } from "../resolvers/UsersResolver";

const styles = StyleSheet.create({
  messageText: {
    color: "#00FF37",
    fontSize: 20,
  },
  messageBox: {
    padding: 10,
    borderLeftColor: "#00FF37",
    borderLeftWidth: 2,
    borderStyle: "solid",
    flexDirection: "column-reverse",
    flex: 1,
  },
});

const profile = StyleSheet.create({
  usernameText: {
    color: "#00FF37",
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

export const Message: React.FC<{
  message: ChatMessage;
  user: User;
  isSelfMessage?: boolean;
  isStacked?: boolean;
}> = ({ message, user, isSelfMessage = false, isStacked = false }) => {
  return (
    <View
      style={{
        flexDirection: isSelfMessage ? "row-reverse" : "row",
        height: 90,
        marginVertical: isStacked ? 0 : 10,
      }}
    >
      <View style={profile.profileBox}>
        {!isStacked && (
          <View>
            <Image source={{ uri: user.image }} style={profile.image} />
            <Text style={profile.usernameText} numberOfLines={1}>
              {user.username}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.messageBox}>
        <Text style={styles.messageText}>{message.message}</Text>
      </View>
    </View>
  );
};
