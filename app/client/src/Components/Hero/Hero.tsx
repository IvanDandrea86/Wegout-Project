import { FC, useEffect, useState } from "react";
import {useSpring,animated,easings } from 'react-spring';
import { getVideos } from "../../Utils/getVideos";
import Loading from "../Utility/Loading";
import styled from "@emotion/styled";
import {BackDropTop,BackDropBottom} from "../BackDrop/BackDrop";

import HeroTitle from "./HeroTtitle"
import Button from '@mui/material/Button'
import Login from "../../Pages/Login/Login";
import { Box } from "@mui/material";

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

const VideoContainer = styled.div``;

export const Hero: FC = () => {
  const [video, setVideo] = useState();
  const [isToggle,setToggle]=useState(false);
  const fadeIn=useSpring({
    from:{ opacity: 0, marginTop: -500 },
    to:{ opacity: 1, marginTop: 0},
    config:{duration:3000, easing: easings.easeInOutSine},

  //  transform: isToggle ? "rotate(0deg)" :"rotate(45deg)",
  })
  const fadeDown=useSpring({
    from:{ opacity: 0},
    to:{ opacity: 1 },
    config:{duration:3000, easing: easings.easeInOutSine},
    //  transform: isToggle ? "rotate(0deg)" :"rotate(45deg)",
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
      <main>
        <animated.div style={fadeIn}>
      <BackDropTop />
      </animated.div >
      <animated.div style={fadeDown}>
      <BackDropBottom/>
      </animated.div>
      <Box
        sx={{
          pt: 8,
          pb: 6,
          height: "80vh",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
        }}
        >
      {isToggle ?
        <HeroTitle/> :
        <Login/>
}
</Box>
<Button variant="text" color="secondary" onClick={()=>{setToggle(!isToggle)}}>
        Change Me
      </Button>
      </main>
    </VideoContainer>
  );
};

export default Hero;
