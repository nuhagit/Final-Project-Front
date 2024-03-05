import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectGoal({handleGoal}) {
  const [goal, setGoal] = React.useState('');

  const handleChange = (event) => {
    setGoal(event.target.value);
    handleGoal(event)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-goal">Goal</InputLabel>
        <Select
          labelId="demo-simple-select-goal"
          id="demo-simple-goal"
          value={goal}
          label="Goal"
          onChange={handleChange}
          sx={{ marginBottom: '20px', textAlign: 'left' }}
        >
          <MenuItem value={"Losing weight"}>Losing weight</MenuItem>
          <MenuItem value={"Gaining weight"}>Gaining weight</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}