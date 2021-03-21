import React, { useRef, useState } from "react";
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

interface MessageInputProps {
  sendClick: (message: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ sendClick }) => {
  const messageBox = useRef<TextInput>(null);
  const [messageBody, setMesasgeBody] = useState<string>("");

  return (
    <View style={styles.view}>
      <TextInput
        ref={messageBox}
        style={styles.input}
        value={messageBody}
        onChangeText={(text) => setMesasgeBody(text)}
      />
      <View style={styles.sendButton}>
        <TouchableHighlight
          onPress={() => {
            sendClick(messageBody);
          }}
        >
          <Ionicons name={"send"} size={25} color={"#fff"} />
        </TouchableHighlight>
      </View>
    </View>
  );
};
