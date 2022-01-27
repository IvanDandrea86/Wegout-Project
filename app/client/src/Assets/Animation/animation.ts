import { easings } from "react-spring"
export const TitleAnimation ={
    from:{ opacity: 0, marginTop: -500 },
      to:{ opacity: 1, marginTop: 0},
      config:{duration:1000, easing: easings.easeInOutSine}
  }

 export const SubTitleAnimation= {   
    from:{ opacity: 0, marginTop: -500 },
    to:{ opacity: 1, marginTop: 0},
    config:{  duration: 6000, easing: easings.easeInOutSine},
  }
  export const LoginAnimation ={
    from:{ opacity :0, marginLeft:-200},
    to:{ opacity :1,marginLeft:0},
    config:{duration:1000}
    }

export const RegisterAnimation =    {
        from:{ opacity :0, marginLeft:200},
        to:{ opacity :1,marginLeft:0},
        config:{duration:1000}
        }



