import { FC } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'




const Navbar:FC=()=>{
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar>
            <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
              
          <Button variant="text" >Today</Button>
          <Button variant="text" >Suggested for you</Button>
          <Button variant="text" >Filter</Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
        )
}
export default Navbar;