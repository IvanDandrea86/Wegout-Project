import { createTheme, ThemeOptions } from '@mui/material';

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
  components:{MuiButton:{
    styleOverrides:
    {    },
    defaultProps:{
      sx:{
        margin:2
      }
    }
  }},
  shape: {
    borderRadius: 5,
  }, 
  spacing: 1,
  
}
export const themeOptionsDark: ThemeOptions = {
  palette: {
    primary: {
      main: '#f7f1e3',
    },
    secondary: {
      main: '#090910',
    },
    background: {
      default: "#090910"
    },
    text:{
      primary:"#f7f1e3",
      secondary:"#f7f1e3"
    }
  },
  components:{MuiButton:{
    styleOverrides:
    { outlined:{
      color:"primary"
      
    }
       },
    defaultProps:{
      sx:{
        margin:2,
      }
    }
  }},
  shape: {
    borderRadius: 5,
    
  },
  spacing: 1,
  
}

export const themeLight= createTheme(themeOptions)
export const themeDark = createTheme(themeOptionsDark)