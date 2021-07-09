import { useCreateUserMutation, useGetUsersQuery, User } from "@Api";
import { getUserIdAndCreateIfNotExist } from "@Helpers/getDeviceId";
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
	const [deviceId, setDeviceId] = useState<string>();
	const [createUser] = useCreateUserMutation();

	if (!deviceId) getUserIdAndCreateIfNotExist().then(setDeviceId);

	const users = data?.Users;

	const createCLI = () => {
		Object.defineProperty(window, "user", {
			value: {
				setUser: (userId: number) => {
					if (users && deviceId) {
						const thisUser = users.find((user) => user.id === userId)!;
						setUser(thisUser);
						console.table(thisUser);
					}
				},
				getUsers: () => {
					console.table(users);
				},
			},
		});
	};

	useEffect(() => {
		if (users && deviceId) {
			const thisUser = users.find((user) => user.deviceid == deviceId)!;

			if (!thisUser) {
				(async () => {
					const userRequest = await createUser({
						variables: { user: { deviceid: deviceId, username: "New User" } },
					});
					const newUser = userRequest.data?.CreateUser!;
					setUser(newUser);
					setLoaded(true);
				})();
			} else {
				setUser(thisUser);
				setLoaded(true);
			}

			createCLI();
		}
	}, [loading, deviceId]);

	return (
		<UserContext.Provider value={{ user, isLoaded }}>
			{children}
		</UserContext.Provider>
	);
};
