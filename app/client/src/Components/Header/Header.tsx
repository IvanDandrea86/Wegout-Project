import React,{FC} from 'react';
import {Box} from '@mui/material';
import  {ButtonBase}  from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  useMutation,
  gql
} from "@apollo/client";



const LOGOUT_MUT= gql`
mutation{logout}
`;


const  Header:FC =()=> {

  const navigate=useNavigate()
  const [logout] = useMutation(LOGOUT_MUT);
 

  const logoutEvent = async (event:React.SyntheticEvent) => {
    event.preventDefault();
     await logout()
     navigate("/login")
  
  };




  return (
    <Box className="header" >
  
      <ButtonBase
      onClick={logoutEvent}>Logout</ButtonBase>

     
      </Box>
  );
}
export default Header;