import {Container, Typography,Stack,Button } from "@mui/material"
import { animated,useSpring}  from "react-spring"

import Translator from "../../Utils/Translator"
import {FC}from "react"
import { SubTitleAnimation, TitleAnimation } from "../../Assets/Animation/animation"



const HeroTitle:FC=()=>{
    
    const stylesTitle = useSpring(TitleAnimation)
      const stylesSub = useSpring(SubTitleAnimation)
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
            sx={{  }}
            direction="row"
            justifyContent="center"
          >
            <Button variant="contained" href={"/register"} sx={{minWidth: '60px', minHeight: '60px'}}>
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