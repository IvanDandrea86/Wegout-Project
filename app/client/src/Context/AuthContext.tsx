import  {createContext,FC} from "react";
import {useQuery,gql} from '@apollo/client';

interface IAuth{
auth:string|null;
}

export const AuthContext = createContext({} as IAuth);

const IS_ME =gql `
 {me{_id}}
`;

const AuthProvider:FC= (props) => {
  
const { data,loading,error } = useQuery(IS_ME)

if (loading) return <p>Loading...</p>;
if (error) return <p>Error!</p>


if(data.me !=null){
  return (
    <AuthContext.Provider
      value={{ auth: data.me._id }}
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

export default AuthProvider;