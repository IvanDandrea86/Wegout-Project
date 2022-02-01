import { createTheme } from '@mui/material';
    import {themeOptions} from "./lightTheme" 
    import {themeOptionsDark} from "./darkTheme"




export const themeLight= createTheme(themeOptions)
export const themeDark = createTheme(themeOptionsDark)