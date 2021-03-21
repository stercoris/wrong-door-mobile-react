import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Routes } from "./src/Routes";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebSocketLink } from "@apollo/client/link/ws";

const wsLink = new WebSocketLink({
  uri: "ws://10.0.0.2:7878/graphql",
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  uri: "http://10.0.0.2:7878/graphql",
  cache: new InMemoryCache(),
  link: wsLink,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </ApolloProvider>
  );
}
