import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
  import { split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql", 
  credentials: "include",
});
var linkUri=""
if (process.env.NODE_ENV === "production") {
  linkUri="wss://wegout.herokuapp.com/subscription"
  httpLink.options.uri="/graphql";
} 
else{
  linkUri="ws://localhost:4000/subscriptions"
}
const wsLink = new WebSocketLink({
  uri: `${linkUri}`,
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