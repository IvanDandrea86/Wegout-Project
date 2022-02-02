import { ThemeOptions } from "@mui/material"

export const themeOptions: ThemeOptions = {
    palette: {
      primary: {
        main: '#090910',
      },
      secondary: {
        main: '#f7f1e3',
      },
      background: {
        default: "#f7f1e3"
      },
      text:{
        primary:"#090910",
        secondary:"#090910"
      }
    },
    components:

    {
      MuiCardContent:{
      defaultProps:{
        sx:{
          color:"#f7f1e3",
          backgroundColor:"#090910", 
        }
      }
    },
    MuiPaper:{
      defaultProps:{
        sx:{
            color:"#f7f1e3",
            backgroundColor:"#090910", 
            boxShadow:0,
            }
      }
    },
    MuiCard:{
      defaultProps:{
        sx:{
          m:5,
            color:"#f7f1e3",
            backgroundColor:"#090910", 
          boxShadow:0,
            }
      }
    },
    MuiCardActions:{
      defaultProps:{
        sx:{
          color:"#f7f1e3",
          backgroundColor:"#090910",
       
         
        }
      }
    },
    MuiCheckbox:{
        defaultProps:{
            color:"secondary"
        }
       
    },
    MuiSlider:{
      
      styleOverrides:{
        markLabel:{
        color:"#f7f1e3"
        },
        rail:{
          color:"#f7f1e3"
        },
        track:{color:"red"},
        thumbColorPrimary:{
          color:"#f7f1e3"
        }
        
      }
    
    },
      MuiButton:{
      styleOverrides:
      { text:
        {color:"inherit",
          position:"relative",
          display:"inline-block",
         
           "&:after" :{    
             background: "none repeat scroll 0 0 transparent",
             backgroundColor:"#f7f1e3",
             bottom: 0,
             content: '""',
             display: "block",
             height: "2px",
             left: "50%",
             position: "absolute",
             transition: "width 0.3s ease 0s, left 0.3s ease 0s",
             width: 0,
           },
           "&:hover:after" :{ 
             width: "100%", 
             left: 0, 
           },}
        },
      defaultProps:{
        sx:{
          margin:2
        }
      }
    },
    MuiSelect:{
      defaultProps:{
        sx:{
          borderRadius:"10px",
          background: "#f7f1e3",
          opacity:0.9,
        
         }
      }
    },
    MuiTextField:{
      defaultProps:{
        sx:{
          borderRadius:"10px",
          background: "#f7f1e3",
          opacity:0.9,
       
         }
      }
    }
  },
    shape: {
      borderRadius: 5,
    }, 
    spacing: 1,
    
  }