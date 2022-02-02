import { createContext, FC, useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { AuthContext } from "./AuthContext";
import Loading from "../Components/Utility/Loading";
import ErrorMess from "../Components/Utility/ErrorMess";

interface IUser {
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  isVerified: boolean | null;
  location: string | null;
  info: {
    bio: string | null;
    age: number | null;
    job: string | null;
    interest: Array<string>;
  };
}

export const UserContext = createContext({} as IUser);

const FIND_USER = gql`
  query ($_id: String!) {
    findUserById(user_id: $_id) {
      email
      firstname
      lastname
      isVerified
      location
      info {
        bio
        age
        job
        interest
      }
    }
  }
`;

const UserProvider: FC = (props) => {
  const context = useContext(AuthContext);
  const { data, loading, error } = useQuery(FIND_USER, {
    variables: {
      _id: context.auth,
    },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMess />;

  let temp = new Array();

  return (
    <UserContext.Provider
      value={{
        firstname: data.findUserById.firstname,
        lastname: data.findUserById.lastname,
        email: data.findUserById.email,
        isVerified: data.findUserById.isVerified,
        location: data.findUserById.location,
        info: {
          bio: data.findUserById.info ? data.findUserById.info.bio : "",
          age: data.findUserById.info ? data.findUserById.info.age : "",
          job: data.findUserById.info ? data.findUserById.info.job : "",
          interest: data.findUserById.info
            ? data.findUserById.info.interest
            : temp,
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
