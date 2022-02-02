import { Container, Typography, Stack, Button } from "@mui/material";
import { animated, useSpring} from "react-spring";
import Translator from "../../Utils/Translator";
import { FC, useContext } from "react";
import {
  TitleAnimation,
  SubTitleAnimation,
} from "../../Assets/Animation/animation";
import { navigatioContext } from "../../Context/NavContext";
const HeroTitle: FC = () => {
  const navigate= useContext(navigatioContext)
  const stylesTitle = useSpring(TitleAnimation);
  const stylesSub = useSpring(SubTitleAnimation);
  return (
    <Container component="main" maxWidth="sm">
      <animated.div
        style={{
          ...stylesTitle,
        }}
      >
        <Typography
          className="linear-wipe "
          sx={{ fontWeight: "bold" }}
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
            <Button variant="contained" onClick={()=>{navigate.setLink("register")}}>
              Join us
            </Button>
            <Button variant="outlined">About Us</Button>
          </Stack>
        </animated.div>
      </animated.div>  
    </Container>
  );
};
export default HeroTitle;
