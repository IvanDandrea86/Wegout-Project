import { FC } from "react"

import { flexStartCenter,absolutCenter } from "../../Assets/Style/style";
import Typography from '@mui/material/Typography'
import { Button, Paper } from "@mui/material";


export const ErrorUnauth:FC=()=>{

    return(
        <div style={absolutCenter}>
            <Paper sx={flexStartCenter}>
            <Typography variant="h1" color="error"> ERROR  </Typography>
            <Typography variant="h1" color="error">  - 404 - </Typography>
            
            <Typography variant="h4" color="error"> Unauthorized Access</Typography>
           
            
            <Button variant="contained" href="/" color="error">Back Home</Button>
            </Paper>
        </div>
    )
}

export default ErrorUnauth;