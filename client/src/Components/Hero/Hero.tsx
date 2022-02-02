import {useContext, FC, useEffect, useState } from "react";


import { getVideos } from "../../Utils/getVideos";
import Loading from "../Utility/Loading";
import styled from "@emotion/styled";
import {BackDropTop,BackDropBottom} from "../BackDrop/BackDrop";

import HeroTitle from "./HeroTitle"
import { video_container,videoStyle} from "./HeroStyles";
import Login from "../../Pages/Login/Login";
import { Box } from "./HeroStyles";
import Register from "../../Pages/Register/Register";
import { navigatioContext } from "../../Context/NavContext";


const VideoContainer = styled.div``;

export const Hero: FC = () => {
  const navigation=useContext(navigatioContext)
  const [video, setVideo] = useState();



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
      <BackDropTop  />
      <BackDropBottom />
      
      <Box > 
      {navigation.link ==="hero" ?
        <HeroTitle /> :
        navigation.link ==="login" ?
        <Login/>: 
        navigation.link ==="register" ?
        <Register/>
       :null
      }
     

</Box>
    </VideoContainer>
  );
};

export default Hero;
