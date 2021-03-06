import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
  import { split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";


const httpuri = process.env.REACT_APP_HTTP ? "/graphql" : "http://localhost:4000/graphql"
const wssuri =process.env.REACT_APP_WSS ? process.env.REACT_APP_WSS:"ws://localhost:4000/subscriptions"
const httpLink = new HttpLink({
  uri: `${httpuri}`, 
  credentials: "include",
});

const wsLink = new WebSocketLink({
  uri: `${wssuri}`,
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