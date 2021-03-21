import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Routes } from "./src/Routes";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const client = new ApolloClient({
  uri: "http://192.168.1.54:7878/graphql",
  cache: new InMemoryCache(),
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
