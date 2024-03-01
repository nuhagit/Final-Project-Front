import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row">
      <Avatar
      alt="Default"
      sx={{
        width: 100,
        height: 100
      }}
      />
    </Stack>
  );
}