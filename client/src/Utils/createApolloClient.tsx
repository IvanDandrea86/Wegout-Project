import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
var url:string

if (process.env.NODE_ENV === "production"){
  url="/graphql"
}
else
{ url =  'http://localhost:4000/graphql';}
  
  export const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    credentials:"include",
  });