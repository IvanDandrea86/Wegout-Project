import {useContext, useState}from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography'

import { filterContext } from "../Context/FilterContext";


export default function SliderRadius() {

  const [value, setValue] =useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    event.preventDefault()
    setValue(newValue as number);
    filter.setRadius(newValue);
    console.log(filter.radius)
  };


const filter=useContext(filterContext)

    const marks = [
        {
          value: 15,
          label: '15Km',
        },
        {
          value: 30,
          label: '30Km',
        },
        {
          value: 50,
          label: '50Km',
        },
        {
          value: 100,
          label: '100Km',
        },
      ];
      
      function valuetext(value: number) {
        return `${value}Km`;
      }
  return (
    <Box sx={{ width: 300 }}>
        <Typography variant="h6" color="inherit">Radius</Typography>
      <Slider
        aria-label="Custom marks"
        defaultValue={50}
        getAriaValueText={valuetext}
        step={5}
        valueLabelDisplay="auto"
        marks={marks}
        value={value} 
        onChange={handleChange}
        onChangeCommitted={()=>{filter.setRadius(value);
          console.log(filter.radius)}}
      />
    </Box>
  );
}