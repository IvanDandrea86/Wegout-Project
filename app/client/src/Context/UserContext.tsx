import  {createContext,FC,useContext} from "react";
import {useQuery,gql} from '@apollo/client';
import { AuthContext } from "./AuthContext";

interface IUser{
firstname :string|null;
lastname: string |null;
email : string| null;

}

export const UserContext = createContext({} as IUser);

const FIND_USER =gql `
query($_id:String! ){
findUserById(user_id : $_id)
{
    firstname
    lastname
    email
}
}
`;

const UserProvider:FC= (props) => {
  const context=useContext(AuthContext)
const { data,loading,error } = useQuery(FIND_USER,{variables:{
    _id:context.auth
}})

if (loading) return <p>Loading...</p>;
if (error) return <p>Error!</p>



  return (
    <UserContext.Provider
      value={{firstname :data.findUserById.firstname,
        lastname:data.findUserById.lastname,
        email : data.findUserById.email,
          }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

;

export default UserProvider;