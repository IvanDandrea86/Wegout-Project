import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

  const url =  '/graphql';
  export const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    credentials:"include",
  });