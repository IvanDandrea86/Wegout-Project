import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
  import { split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "/graphql", 
  credentials: "include",
});

const wsLink = new WebSocketLink({
  uri: `wss://wegout.herokuapp.com/subscriptions`,
  options: {
    reconnect: true,
  },
});

const link = split(
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
  
  export const client = new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });