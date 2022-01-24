import { FC } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';




const Navbar:FC=()=>{
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
          <Button href="#text-buttons">Categories</Button>
          <Button href="#text-buttons">Today</Button>
          <Button href="#text-buttons">Suggested for you</Button>
          </Toolbar>
        </AppBar>
      </Box>
        )
}
export default Navbar;