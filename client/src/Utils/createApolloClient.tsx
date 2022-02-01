import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";


  const url =  'http://localhost:4000/graphql';
  
  export const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    credentials:"include",
  });