import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function Login() {
  return (
    <Stack
      component="form"
      sx={{
        width: '100%',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField label="email" color="primary" focused />
      <TextField label="password" color="primary" focused />
    </Stack>
  );
}
