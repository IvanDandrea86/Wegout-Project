import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography'



export default function SliderRadius() {
    const marks = [
        {
          value: 15,
          label: '0Km',
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
        defaultValue={15}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}