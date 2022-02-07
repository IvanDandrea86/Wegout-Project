import {
    ApolloClient,
    ApolloLink,
    InMemoryCache,
    RequestHandler,
  } from "@apollo/client";
  import { split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
  
const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});
const wsLink = new WebSocketLink({
  uri: "ws://localhost:4000/subscriptions",
  options: {
    reconnect: true,
  },
});

if (process.env.NODE_ENV === "production"){
  httpLink.options.uri="/graphql";
}
if ( process.env.NODE_ENV === "staging"){
  httpLink.options.uri="/graphql";
}
console.log(process.env.PUBLIC_URL)




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