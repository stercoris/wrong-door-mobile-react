import { useGetUsersQuery, User } from "@Api";
import { getDeviceId } from "@Helpers/getDeviceId";
import React, { useState } from "react";

type UserInfo = null | User;

export const UserContext = React.createContext<{
	user: UserInfo;
	login: () => Promise<void>;
	// setName: (name: string) => void;
	// changePicture: (picture: string) => void;
}>({
	user: null,
	login: async () => {},
	// setName: (name: string) => {},
	// changePicture: () => {},
});

interface UserContextProps {}

export const UserInfoProvider: React.FC<UserContextProps> = ({ children }) => {
	const [user, setUser] = useState<UserInfo>(null);
	const Users = useGetUsersQuery();

	return (
		<UserContext.Provider
			value={{
				user,
				login: async () => {
					const deviceid = getDeviceId();
				},
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
