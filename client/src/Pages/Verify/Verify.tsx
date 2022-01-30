import { useMutation, gql } from "@apollo/client";
import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const VERIFY_MUT = gql`
  mutation ($token: String!) {
    verifiy(token: $token) {
      errors {
        field
        message
      }
      user {
        _id
      }
    }
  }
`;

export const Verify: FC = () => {
  const { token } = useParams();
  const history = useNavigate();
  const  [verify  ]= useMutation(VERIFY_MUT );

useEffect(()=>{


async function ver() {
    
    const { data } = await verify({
      variables: {
        token: token,
      },
    })
  
    if (data.verifiy.errors) {
      console.error(data.verifiy.errors.field);
      console.error(data.verifiy.errors.message);
    } else {
      history("/");
    }
}
ver()
},[])

  return <div></div>;
};
