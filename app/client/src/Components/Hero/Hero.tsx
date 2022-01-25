import { FC, useEffect, useState } from "react";
import {useSpring,animated,easings } from 'react-spring';
import {
  Box,
  Container,
  Typography,

  Button,
  Stack,
} from "@mui/material";
import Translator from "../../Utils/Translator";
import { getVideos } from "../../Utils/getVideos";
import Loading from "../Utility/Loading";
import styled from "@emotion/styled";
import {BackDropTop,BackDropBottom} from "../BackDrop/BackDrop";


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



  useEffect(() => {
    getVideos("dance", 10, setVideo);
  }, []);

  const stylesTitle = useSpring({
    from:{ opacity: 0, marginTop: -500 },
      to:{ opacity: 1, marginTop: 0},
      config:{duration:3000, easing: easings.easeInOutSine}
  })
  const stylesSub = useSpring({
    
    from:{ opacity: 0, marginTop: -500 },
    to:{ opacity: 1, marginTop: 0},
    config:{  duration: 6000, easing: easings.easeInOutSine},
  })

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
      <BackDropTop />
      <BackDropBottom/>
        <Box
          sx={{
            pt: 8,
            pb: 6,
            height: "83vh",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
          }}
          >
          <Container component="main" maxWidth="sm">
          <animated.div
             style={{
              ...stylesTitle,
            }}
          >
            <Typography
              className="linear-wipe "
              sx={{  fontWeight: "bold" }}
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
              We..GO..Out!
            </Typography>
            
            <animated.div
             style={{
              ...stylesSub,
            }}
          >
            <Typography variant="h5" align="center" paragraph>
              <Translator trad="hero" />
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href={"/register"}>
                Join us
              </Button>
              <Button variant="outlined" href={"/about"}>
                 About Us
              </Button>
            </Stack>
            </animated.div>
            </animated.div>
            

          </Container>
        </Box>
           
      </main>
    </VideoContainer>
  );
};

export default Hero;
