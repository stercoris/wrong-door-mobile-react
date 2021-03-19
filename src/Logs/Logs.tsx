import React from "react";
import { useContext } from "react";
import { Text, View } from "react-native";
import { UserContext } from "../ContextProvider/ContextProvider";
import { Center } from "../views/Center";

interface LogsProps {}

export const LogsView: React.FC<LogsProps> = () => {
  const { user } = useContext(UserContext);

  return (
    <Center>
      <Text>This is logs view</Text>
    </Center>
  );
};
