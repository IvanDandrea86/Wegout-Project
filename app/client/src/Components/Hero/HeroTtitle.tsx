import {Box,Container, Typography,Stack,Button } from "@mui/material"
import { animated,useSpring ,easings} from "react-spring"

import Translator from "../../Utils/Translator"
import {FC}from "react"



const HeroTitle:FC=()=>{
    
    const stylesTitle = useSpring({
        from:{ opacity: 0, marginTop: -500 },
          to:{ opacity: 1, marginTop: 0},
          config:{duration:1000, easing: easings.easeInOutSine}
      })
      const stylesSub = useSpring({
        
        from:{ opacity: 0, marginTop: -500 },
        to:{ opacity: 1, marginTop: 0},
        config:{  duration: 6000, easing: easings.easeInOutSine},
      })
    return (

     
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
            <Button variant="outlined" >
               About Us
            </Button>
          </Stack>
          </animated.div>
          </animated.div>
          

        </Container>
     
    )
}

export default HeroTitle;