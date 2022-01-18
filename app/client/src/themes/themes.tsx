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
export const theme= createTheme(themeOptions)