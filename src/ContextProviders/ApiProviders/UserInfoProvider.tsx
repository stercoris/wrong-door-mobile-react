import { useGetUsersQuery, User } from "@Api";
import { getDeviceId } from "@Helpers/getDeviceId";
import React, { useEffect, useState } from "react";

type UserInfo = null | User;

export const UserContext = React.createContext<{
	user: UserInfo;
	// setName: (name: string) => void;
	// changePicture: (picture: string) => void;
}>({
	user: null,
	// setName: (name: string) => {},
	// changePicture: () => {},
});

interface UserContextProps {}

export const UserInfoProvider: React.FC<UserContextProps> = ({ children }) => {
	const { loading, data } = useGetUsersQuery();
	const [user, setUser] = useState<UserInfo>(null);

	useEffect(() => {
		(async () => {
			setTimeout(() => {
				const users = data?.Users;

				if (users) {
					const thisUser = users.find((user) => user.id == 8)!;
					console.log(thisUser);
					setUser(thisUser);
				}
			}, 5000);
		})();
	}, [loading]);

	return (
		<UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
	);
};
