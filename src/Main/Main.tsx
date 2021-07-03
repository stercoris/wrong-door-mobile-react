import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Navigation } from "@Tabs/Navigation";
// import { useFonts, Montserrat_100Thin } from "@expo-google-fonts/montserrat";

// ---- CONTEXT ----
import { ContextProvider } from "@ContextProviders/ContextProvider";
import { WrongDoorApiProvider } from "@ApiProvider";
// ---- CONTEXT ----

export const Main = () => {
	return (
		<SafeAreaProvider>
			<WrongDoorApiProvider>
				<ContextProvider>
					<StatusBar backgroundColor="black" barStyle="light-content" />
					<SafeAreaView style={{ flex: 1 }}>
						<Navigation />
					</SafeAreaView>
				</ContextProvider>
			</WrongDoorApiProvider>
		</SafeAreaProvider>
	);
};
