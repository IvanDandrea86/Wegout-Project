import  React,{FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../Assets/Images/logo.svg'
import Translator from '../../Utils/Translator';

import ThemeSwitch from "../../Components/ThemeSwitch/ThemeSwitch";



const  UnauthHeader:FC=()=> {
 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="logo"  />
          </Typography>
          <Button color="inherit"
          href="/login">
         <Translator trad="login" /> 
          </Button>
          <Button color="inherit" href="/register">
          <Translator trad="register" /> 
          </Button>
          <ThemeSwitch />
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}
export default UnauthHeader;