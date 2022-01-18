import  {createContext,FC } from "react";
import {useQuery,gql} from '@apollo/client';

interface IAuth{
auth:string|null;
}

const defaultAuth={
    auth:null
}

// query is the state
// SearchHandler is a function for changing the state.
export const AuthContext = createContext(defaultAuth);

const IS_ME =gql `
 {whoAmI{_id}}
`;

// Defining a simple HOC component
const AuthContextProvider:FC= (props) => {
const { data,loading,error } = useQuery(IS_ME)
if (loading) return <p>Loading...</p>;
if (error) return <p>Error!</p>
if(data.whoAmI !=null){
  return (
    <AuthContext.Provider
      value={{ auth: data.whoAmI._id }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
else{
    return (
        <AuthContext.Provider
          value={{ auth: null }}
        >
          {props.children}
        </AuthContext.Provider>
      );
}
};

export default AuthContextProvider;