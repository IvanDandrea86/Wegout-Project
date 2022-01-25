import { FC, useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  CssBaseline,
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

  console.log(video);

  useEffect(() => {
    getVideos("dance", 10, setVideo);
  }, []);

  return (
    <VideoContainer style={video_container}>
      <CssBaseline />
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
            height: "80vh",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
          }}
          >
          <Container component="main" maxWidth="sm">
            <Typography
              className="linear-wipe "
              sx={{ mt: 50, fontWeight: "bold" }}
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
              We..GO..Out!
            </Typography>
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
                More about
              </Button>
            </Stack>
          </Container>
        </Box>
           
      </main>
    </VideoContainer>
  );
};

export default Hero;
