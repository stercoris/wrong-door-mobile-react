import { useCreateUserMutation, User } from "@Api";
import { UsersContext } from "@ContextProviders/ApiProviders/UsersProvider";
import { getUserIdAndCreateIfNotExist } from "@Helpers/getDeviceId";
import React, { useContext, useEffect, useState } from "react";

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
  const { users, isLoaded: isAllUsersLoaded } = useContext(UsersContext);
  const [user, setUser] = useState<UserInfo>(null);
  const [isLoaded, setLoaded] = useState<boolean>(false);
  const [CLICreated, setCLICreated] = useState<boolean>(false);
  const [deviceId, setDeviceId] = useState<string>();
  const [createUser] = useCreateUserMutation();

  if (!deviceId) getUserIdAndCreateIfNotExist().then(setDeviceId);

  const createCLI = () => {
    Object.defineProperty(window, "user", {
      value: {
        setUser: (userId: number) => {
          const thisUser = users.find((user) => user.id === userId)!;
          setUser(thisUser);
          console.table(thisUser);
        },
        getUsers: () => console.table(users),
      },
    });
  };

  useEffect(() => {
    if (!isAllUsersLoaded || !deviceId) return;

    const thisUser = users.find((user) => user.deviceid == deviceId)!;

    if (thisUser) {
      setUser(thisUser);
      setLoaded(true);
      if (!CLICreated) {
        createCLI();
        setCLICreated(true);
      }
      return;
    }

    (async () => {
      const userRequest = await createUser({
        variables: { user: { deviceid: deviceId, username: "New User" } },
      });
      const newUser = userRequest.data?.CreateUser!;
      setUser(newUser);
      setLoaded(true);
      if (!CLICreated) {
        createCLI();
        setCLICreated(true);
      }
    })();
  }, [isAllUsersLoaded, deviceId]);

  return (
    <UserContext.Provider value={{ user, isLoaded }}>
      {children}
    </UserContext.Provider>
  );
};
