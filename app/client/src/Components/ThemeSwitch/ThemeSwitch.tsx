

import Switch from '@mui/material/Switch';
import {useState,FC,}from 'react'

const ThemeSwitch:FC =()=>{
  const [checked,setChecked]=useState<boolean>(true)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return(
<Switch
  checked={checked}
  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>
)
}

export default ThemeSwitch;