import { createTheme, ThemeOptions } from '@mui/material';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: "#FFFFFF"
    },
    text:{
      primary:"#000000",
      secondary:"#000000"
    }
  },
  shape: {
    borderRadius: 5,
  }, 
  spacing: 1,
  
}
export const themeOptionsDark: ThemeOptions = {
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: "#000000"
    },
    text:{
      primary:"#FFFFFF",
      secondary:"#FFFFFF"
    }
  },
  shape: {
    borderRadius: 5,
    
  },
  spacing: 1,
  
}

export const themeLight= createTheme(themeOptions)
export const themeDark = createTheme(themeOptionsDark)