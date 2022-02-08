import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
  import { split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
var linkUri=""
if (process.env.NODE_ENV === "development") {
  linkUri="/subscription"
} 
else{
  linkUri="ws://localhost:4000/subscriptions"
}
const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql", 
  credentials: "include",
});
const wsLink = new WebSocketLink({
  uri: `${linkUri}`,
  options: {
    reconnect: true,
  },
});
if (process.env.NODE_ENV === "development"){
  httpLink.options.uri="/graphql";
}
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