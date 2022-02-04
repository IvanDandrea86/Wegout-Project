import { Box, AppBar, Toolbar, Typography } from "@mui/material"
import { Fragment } from "react"




export  const Bar =()=>{
return(
    <Fragment>
        <Box mb={4}>
            <AppBar position="static" >
              <Toolbar>
                 
                   <Typography variant="h6" >Event Chat</Typography>
              </Toolbar>
            </AppBar>
        </Box>
        </Fragment>
)

}