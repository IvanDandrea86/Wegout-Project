


import Switch from '@mui/material/Switch';
import {useState,FC, useContext,}from 'react'
import { CustomThemeContext } from '../../Context/CustomThemeProvider';

const ThemeSwitch:FC =()=>{
  const {toggle}=useContext(CustomThemeContext)
  const [checked,setChecked]=useState<boolean>(true)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    toggle() 
  };
  return(
<Switch
  color="secondary"
  checked={checked}
  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>
)
}

export default ThemeSwitch;