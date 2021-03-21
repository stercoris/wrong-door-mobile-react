import React, { useState } from "react";

type UserInfo = null | {
  userid: string;
  username: string;
};

export const UserContext = React.createContext<{
  user: UserInfo;
  setName: (name: string) => void;
  setUserId: () => void;
}>({
  user: null,
  setName: (name: string) => {},
  setUserId: () => {},
});

interface UserContextProps {}

export const UserInfoProvider: React.FC<UserContextProps> = ({ children }) => {
  const [user, setUser] = useState<UserInfo>(null);
  return (
    <UserContext.Provider
      value={{
        user,
        setName: (name: string) => {
          const newUser = user;
          if (newUser) {
            newUser.username = name;
            setUser(newUser);
          }
        },
        setUserId: () => {},
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
