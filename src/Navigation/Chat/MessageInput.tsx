import React from "react";
import { Button, StyleSheet, TouchableHighlight, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
  },

  input: {
    flex: 6,
    backgroundColor: "#002222",
    color: "white",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

  sendButton: {
    flex: 1,
    justifyContent: "center",
  },
});

interface MessageInputProps {}

export const MessageInput: React.FC<MessageInputProps> = () => {
  return (
    <View style={styles.view}>
      <TextInput style={styles.input} />
      <View style={styles.sendButton}>
        <TouchableHighlight
          onPress={() => {
            console.log("aaa");
          }}
        >
          <Ionicons name={"send"} size={25} color={"#fff"} />
        </TouchableHighlight>
      </View>
    </View>
  );
};
