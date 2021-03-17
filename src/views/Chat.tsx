import { useContext } from "react";
import { Text, View } from "react-native";
import { UserContext } from "../ContextProvider/ContextProvider";

interface ChatProps {}

export const ChatView: React.FC<ChatProps> = () => {
  const { user } = useContext(UserContext);

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};
