import React,{ FC, useState ,useEffect} from "react"
import {Box, Container, Typography,CssBaseline,Skeleton,
Button,Stack}from "@mui/material"
import Translator from '../../Utils/Translator';
import { getPhotos } from "../../Utils/getPhotos";
 import  {unsplashAPI}  from "../../Utils/constants";
 import {pexelsAPI} from "../../Utils/constants";
  import {getVideos} from "../../Utils/getVideos";
  import {Videos} from '../../Utils/Types/types'



export const Hero:FC= ()=>{

console.log(unsplashAPI)

console.log(pexelsAPI)
  
  // const [data, setData] = useState({} as IImgageData);
  // const [video,setVideo]=useState({}as Videos)

  // useEffect(() => {
  // getPhotos(unsplashAPI,"lifestyle",setData)}
  // , []);

  // useEffect(() => {
  //  getVideos("party",1,setVideo)}
  //  , []);






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
              {/* <Stack spacing={1}>
       { data.urls ?  <img src={data.urls.full}alt="" /> :  <Skeleton variant="rectangular" width={210} height={118} /> }
       </Stack>
       <Stack spacing={1}>
       { video.videos ?  <video src={video.videos[0].video_files[0].link} width="600" height="300" loop autoPlay muted  /> :  <Skeleton variant="rectangular" width={210} height={118} /> }
       </Stack> */}
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
            
      
   

          </Container>
        </Box>
     
      </main>
    )
}

export default Hero;