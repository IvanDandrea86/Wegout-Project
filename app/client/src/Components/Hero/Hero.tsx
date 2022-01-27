import {useContext, FC, useEffect, useState } from "react";
import {useSpring,animated,easings } from 'react-spring';
import { getVideos } from "../../Utils/getVideos";
import Loading from "../Utility/Loading";
import styled from "@emotion/styled";
import {BackDropTop,BackDropBottom} from "../BackDrop/BackDrop";

import HeroTitle from "./HeroTtitle"
import Button from '@mui/material/Button'
import Login from "../../Pages/Login/Login";
import { Box } from "@mui/material";
import Register from "../../Pages/Register/Register";
import { navigatioContext } from "../../Context/NavContext";


//Styles
const video_container: React.CSSProperties = {
  minHeight: "100%",
  maxHeight: "100%",
  overflow: "hidden",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const videoStyle: React.CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  zIndex: -1,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  opacity: 0.75,
};
const centerBox ={
    pt: 8,
    pb: 6,
    height: "80vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  
}

const VideoContainer = styled.div``;

export const Hero: FC = () => {
  const navigation=useContext(navigatioContext)
  const [video, setVideo] = useState();
  const [toggle,setToggle]=useState(false)
console.log(toggle)
  const fadeIn=useSpring({
   opacity: toggle ? 0 :1,
  })

  const fadeDown=useSpring({
    opacity: toggle ? 0 :1,
    // transform: toggle ? 'scale(0)' : 'scale(1)',
      
  })

  useEffect(() => {
    getVideos("dance", 10, setVideo);
  }, []);


  
  return (
    <VideoContainer style={video_container}>
      {video ? (
        <video loop muted autoPlay style={videoStyle}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Loading />
        )}
         <animated.div style={fadeIn}> 
      <BackDropTop  />
      </animated.div > 
       <animated.div style={fadeDown}>
      <BackDropBottom />
       </animated.div> 
      <Box sx={centerBox}>
  
      {navigation.link ==="hero" ?
        <HeroTitle /> :
        navigation.link ==="login" ?
        <Login/>: 
        navigation.link ==="register" ?
        <Register/>
       :null
      }
      <Button variant="contained" color="primary" onClick={()=>{setToggle(!toggle)}}>
        Rotate
      </Button>

</Box>
    </VideoContainer>
  );
};

export default Hero;
