import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Routes } from "./src/Routes";
import { StyleSheet } from "react-native";

const client = new ApolloClient({
  uri: "http://10.0.0.2:7878/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}
