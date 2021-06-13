import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Routes } from "./src/Navigation/Routes";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { WebSocketLink } from "@apollo/client/link/ws";
import Config from "@Config";

const wsLink = new WebSocketLink({
	uri: `ws://${Config.ServerURL}:${Config.WebSocketPORT}/graphql`,
	options: {
		reconnect: true,
	},
});

const client = new ApolloClient({
	uri: `http://${Config.ServerURL}:${Config.GraphQLPORT}/graphql`,
	cache: new InMemoryCache(),
	link: wsLink,
});

export default function App() {
	return (
		<SafeAreaProvider>
			<ApolloProvider client={client}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<SafeAreaView style={{ flex: 1 }}>
					<Routes />
				</SafeAreaView>
			</ApolloProvider>
		</SafeAreaProvider>
	);
}
