import { useGetUsersQuery, User } from "@Api";
import { getDeviceId } from "@Helpers/getDeviceId";
import React, { useEffect, useState } from "react";

type UserInfo = null | User;

export const UserContext = React.createContext<{
	user: UserInfo;
	isLoaded: boolean;
	// setName: (name: string) => void;
	// changePicture: (picture: string) => void;
}>({
	user: null,
	isLoaded: false,
	// setName: (name: string) => {},
	// changePicture: () => {},
});

interface UserContextProps {}

export const UserInfoProvider: React.FC<UserContextProps> = ({ children }) => {
	const { loading, data } = useGetUsersQuery();
	const [user, setUser] = useState<UserInfo>(null);
	const [isLoaded, setLoaded] = useState<boolean>(false);

	useEffect(() => {
		const users = data?.Users;

		if (users) {
			const thisUser = users.find((user) => user.id == 8)!;
			console.log(thisUser);
			setUser(thisUser);
			setLoaded(true);
		}
	}, [loading]);

	return (
		<UserContext.Provider value={{ user, isLoaded }}>
			{children}
		</UserContext.Provider>
	);
};
