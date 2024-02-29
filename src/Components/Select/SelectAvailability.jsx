import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAvailability({handleAvailability}) {
  const [availability, setAvailability] = React.useState('');

  const handleChange = (event) => {
    
    setAvailability(event.target.value);
    handleAvailability(event)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-av">Availability</InputLabel>
        <Select
          labelId="demo-simple-select-av"
          id="demo-simple-av"
          value={availability}
          label="Availability"
          onChange={handleChange}
          sx={{ marginBottom: '20px', textAlign: 'left' }}
        >
          <MenuItem value={3}>3 days per week</MenuItem>
          <MenuItem value={5}>5 days per week </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}