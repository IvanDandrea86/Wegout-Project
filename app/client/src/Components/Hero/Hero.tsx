import React,{ FC } from "react"
import {Box, Container, Typography,CssBaseline,Skeleton,
Button,Stack}from "@mui/material"
import Translator from '../../Utils/Translator';

export const Hero:FC=()=>{
    return(
        <main>
           <CssBaseline />
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
  
          
          <Container component="main" maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
            We..GO..Out!
            </Typography>
            <Typography variant="h5" align="center"  paragraph>
            <Translator trad="hero" /> 
           </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
   
              <Button variant="contained" href={'/register'}>Join us</Button>
              <Button variant="outlined" href={'/about'}>More about</Button>
            </Stack>
            <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
          </Container>
        </Box>
     
      </main>
    )
}

export default Hero;