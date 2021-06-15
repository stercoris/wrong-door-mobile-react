import { LogsMessage } from "@Api";
import React, { useEffect, useState } from "react";

type LogsMessages = LogsMessage[];

export const LogsMessagesContext = React.createContext<{}>({});

interface LogsMessagesProviderProps {}

export const LogMessagesProvider: React.FC<LogsMessagesProviderProps> = ({
	children,
}) => {
	return (
		<LogsMessagesContext.Provider value={{}}>
			{children}
		</LogsMessagesContext.Provider>
	);
};
