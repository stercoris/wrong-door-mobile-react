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

export type ChatMessage = {
  __typename?: 'ChatMessage';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  message: Scalars['String'];
  time: Scalars['DateTime'];
};


export type Command = {
  __typename?: 'Command';
  id: Scalars['Int'];
  body: Scalars['String'];
  username: Scalars['String'];
  type: Scalars['Int'];
  time: Scalars['DateTime'];
  is_executed: Scalars['Boolean'];
};

export type LogsMessage = {
  __typename?: 'LogsMessage';
  id: Scalars['Int'];
  commandId: Scalars['Int'];
  command?: Maybe<Command>;
  username: Scalars['String'];
  message: Scalars['String'];
  time: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  deviceid: Scalars['String'];
  username: Scalars['String'];
  access_level: Scalars['Int'];
  last_online_time: Scalars['DateTime'];
  image?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddMessage: ChatMessage;
  DeleteMessage: Scalars['Boolean'];
  AddCommand: Command;
  DeleteCommand: Scalars['Boolean'];
  AddLog: LogsMessage;
  DeleteLog: Scalars['Boolean'];
  UpdateUser: User;
  CreateUser: User;
  DeleteUser: Scalars['Boolean'];
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

export type ChatMessageInput = {
  message: Scalars['String'];
  userId: Scalars['Int'];
};

export type CommandInput = {
  body: Scalars['String'];
  username: Scalars['String'];
  type: Scalars['Int'];
};

export type LogsMessageInput = {
  message: Scalars['String'];
  username: Scalars['String'];
  commandId: Scalars['Int'];
};

export type UserUpdateInput = {
  username?: Maybe<Scalars['String']>;
  access_level?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
};

export type UserInput = {
  deviceid: Scalars['String'];
  username: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newMessage: ChatMessage;
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
  & Pick<Mutation, 'DeleteMessage'>
);

export type GetChatMessagesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetChatMessagesQuery = (
  { __typename?: 'Query' }
  & { Messages: Array<(
    { __typename?: 'ChatMessage' }
    & Pick<ChatMessage, 'message' | 'userId' | 'time' | 'id'>
  )> }
);

export type SubsribeToNewMessagesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubsribeToNewMessagesSubscription = (
  { __typename?: 'Subscription' }
  & { newMessage: (
    { __typename?: 'ChatMessage' }
    & Pick<ChatMessage, 'id' | 'userId' | 'message' | 'time'>
  ) }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { Users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'deviceid' | 'username' | 'access_level' | 'last_online_time' | 'image'>
  )> }
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
  DeleteMessage(id: $id)
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
export const GetUsersDocument = gql`
    query GetUsers {
  Users {
    id
    deviceid
    username
    access_level
    last_online_time
    image
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