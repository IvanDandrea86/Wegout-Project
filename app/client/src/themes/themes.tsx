import { createTheme, ThemeOptions } from '@mui/material';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#2A0944',
    },
    secondary: {
      main: '#FFE162',
    },
  },
  shape: {
    borderRadius: 12,
  }, 
}
export const themeOptionsDark: ThemeOptions = {
  palette: {
    primary: {
      main: '#FFE162',
    },
    secondary: {
      main: '#2A0944',
    },
  },
  shape: {
    borderRadius: 12,
  }, 
}

export const themeLight= createTheme(themeOptions)
export const themeDark = createTheme(themeOptionsDark)