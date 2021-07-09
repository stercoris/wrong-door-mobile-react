// @refresh reset
import React, { ReactElement, useContext } from "react";
import { View } from "react-native";
import { LoadingIndicator } from "@Views/LoadingIndicator/LoadingScreen";
import { UserContext } from "@ContextProviders/ApiProviders/UserInfoProvider";
import { ChatMessagesContext } from "@ContextProviders/ApiProviders/ChatMessagesProvider";
import { CommandsContext } from "@ContextProviders/ApiProviders/CommandsProvider";
import { YouNotRegistredScreen } from "./YouNotRegistredScreen/YouNotRegistredScreen";
import { AccessLevel } from "@Api";

interface LoadingProps {}

export const LoadingScreen: React.FC<LoadingProps> = ({ children }) => {
	const { isLoaded: isUsersLoaded, user } = useContext(UserContext);
	const { isLoaded: isChatLoaded } = useContext(ChatMessagesContext);
	const { isLoaded: isCommandsLoaded } = useContext(CommandsContext);

	const isAllLoaded = isUsersLoaded && isChatLoaded && isCommandsLoaded;

	const isHavePersmission = (al: AccessLevel) =>
		![AccessLevel.Denied].includes(al);

	if (!isAllLoaded) {
		return <LoadingIndicator />;
	}

	if (isHavePersmission(user?.access_level!)) {
		return <>{children}</>;
	} else {
		return <YouNotRegistredScreen />;
	}
};
