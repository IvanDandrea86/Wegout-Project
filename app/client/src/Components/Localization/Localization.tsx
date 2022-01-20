import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { languageContext } from '../../Context/LocalesProvider';


export default function ControlledOpenSelect() {
  const [language, setLanguages] = React.useState<string >('en');
  const [open, setOpen] = React.useState(false);
  const {setLanguage}=React.useContext(languageContext)

  const handleChange = (event: SelectChangeEvent<typeof language>) => {
    setLanguages(event.target.value);
    setLanguage(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-label">Languages</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={language}
          label="Languages"
          onChange={handleChange}
        >
          <MenuItem value={'it'}>Italiano</MenuItem>
          <MenuItem value={'fr'}>Français</MenuItem>
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'de'}>Deutsch</MenuItem>
          <MenuItem value={'nl'}>Nederlands</MenuItem> 
          <MenuItem value={'es'}>Español</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}