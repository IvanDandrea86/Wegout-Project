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
          <img src={logo} alt="logo" style={{
        flex: 1,
        alignSelf: 'stretch',
        width: 110,
        height: 60,
        marginTop:10
    }}  />
          </Typography>
          <Button variant='contained' color="secondary"
          href="/login">
         <Translator trad="login" /> 
          </Button>
          <Button variant='outlined' color="secondary" href="/register">
          <Translator trad="register" /> 
          </Button>
          <ThemeSwitch />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default UnauthHeader;