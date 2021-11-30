import {
  useGetUsersQuery,
  User,
  useSubscribeToDeletedUserSubscription,
  useSubscribeToNewUserSubscription,
} from "@Api";
import React from "react";
import сonnectEntityToGraphql from "./common/baseReactiveContext";

interface UsersContextType {
  users: User[];
  isLoaded: boolean;
}

const UsersContextDefaultState: UsersContextType = {
  users: [],
  isLoaded: false,
};

export const UsersContext = React.createContext<UsersContextType>(
  UsersContextDefaultState
);

interface UsersProviderProps {}

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
  const { data: all } = useGetUsersQuery();
  const { data: subscribeNew } = useSubscribeToNewUserSubscription();
  const { data: subscribeDelete } = useSubscribeToDeletedUserSubscription();

  const { entities: users, isLoaded } = сonnectEntityToGraphql({
    allEntities: all?.Users,
    deletedIncomingEntity: subscribeNew?.newUser,
    newIncomingEntity: subscribeDelete?.deletedUser,
  });

  const context: UsersContextType = {
    users,
    isLoaded,
  };

  return (
    <UsersContext.Provider value={context}>{children}</UsersContext.Provider>
  );
};
