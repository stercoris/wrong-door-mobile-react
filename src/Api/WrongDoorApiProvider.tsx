import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import Config from "@Config";

const httpLink = new HttpLink({
  uri: `http://${Config.ServerURL}:${Config.GraphQLPORT}/graphql`,
});

const wsLink = new WebSocketLink({
  uri: `ws://${Config.ServerURL}:${Config.WebSocketPORT}/graphql`,
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  uri: `http://${Config.ServerURL}:${Config.GraphQLPORT}/graphql`,
  cache: new InMemoryCache(),
  link: splitLink,
});
export const WrongDoorApiProvider: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
