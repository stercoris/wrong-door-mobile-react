import React from "react";
import { useContext } from "react";
import { Text, View } from "react-native";
import { UserContext } from "../../ContextProviders/ContextProvider";
import { Center } from "../../views/Center";

interface RoomsProps {}

export const RoomsView: React.FC<RoomsProps> = () => {
  const { user } = useContext(UserContext);

  return (
    <Center>
      <Text>This is rooms view</Text>
    </Center>
  );
};
