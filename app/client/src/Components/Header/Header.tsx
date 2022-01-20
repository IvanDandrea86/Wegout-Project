import React,{useContext} from 'react';

import {Box} from '@mui/material';
import  {ButtonBase}  from '@mui/material';

import { useNavigate } from 'react-router-dom';

import {
  useMutation,
  gql
} from "@apollo/client";
import { AuthContext } from '../../Context/AuthContext';






const LOGOUT_MUT= gql`
mutation{logout}
`;


export default function Header() {
  const context =useContext(AuthContext)
  const navigate=useNavigate()
  const [logout] = useMutation(LOGOUT_MUT);
 

  const logoutEvent = async (event:React.SyntheticEvent) => {
    event.preventDefault();
     await logout()
     navigate("/login")
  
  };




  return (
    <Box className="header" >
      {context.auth? 
      <ButtonBase
      onClick={logoutEvent}>Logout</ButtonBase>
    :
    <ButtonBase
      >You are not logged</ButtonBase>
      }
      </Box>
  );
}
