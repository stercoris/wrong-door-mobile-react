import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Controls } from "./src/Navigation/ControlsScreen/Controls";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { WebSocketLink } from "@apollo/client/link/ws";
import Config from "@Config";
import { Navigation } from "@Tabs/Navigation";
// import { useFonts, Montserrat_100Thin } from "@expo-google-fonts/montserrat";

// ---- CONTEXT ----
import { ContextProvider } from "@ContextProviders/ContextProvider";
// ---- CONTEXT ----

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
	// useFonts({ Montserrat_100Thin });

	return (
		<SafeAreaProvider>
			<ApolloProvider client={client}>
				<ContextProvider>
					<StatusBar backgroundColor="black" barStyle="light-content" />
					<SafeAreaView style={{ flex: 1 }}>
						<Navigation />
					</SafeAreaView>
				</ContextProvider>
			</ApolloProvider>
		</SafeAreaProvider>
	);
}
