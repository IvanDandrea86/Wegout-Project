import { Box, Fab } from "@mui/material"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const BackFab:FC=()=>{

const navigate =useNavigate()
    return(
        <Box sx={{ '& > :not(style)': { m: 1,position:"fixed",bottom:65,right:25 }}}>
        <Fab variant="extended" size="large" onClick={()=>{navigate("/")}} >
          <ArrowBackIcon sx={{ mr: 1 }} />
          Back
       </Fab>
      </Box>
    )
}