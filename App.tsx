import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { UserInfoProvider } from "./src/ContextProvider/ContextProvider";

const client = new ApolloClient({
  uri: "http://192.168.141.151:4588/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <UserInfoProvider>
        <View style={styles.container}>
          <Text>Hello World </Text>
          <StatusBar style="auto" />
        </View>
      </UserInfoProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
