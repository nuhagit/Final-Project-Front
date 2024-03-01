import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSex({handleSex}) {
  const [sex, setSex] = React.useState('');

  const handleChange = (event) => {
    setSex(event.target.value)
    handleSex(event);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sex</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sex}
          label="Sex"
          onChange={handleChange}
          sx={{ marginBottom: '20px', textAlign: 'left' }}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}