import { useState } from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField, Typography } from '@mui/material'

import { login } from '../../Services/authService'

function Login() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = async () => {
      const { result } = await login({ email, password })
      localStorage.setItem('token', result)
    }

    return (
        
    <Card sx={{
      maxWidth: '500px',
      position: 'absolute',
      display: 'felx',
      flexWrap: 'wrap'}}>
    <CardHeader title="Login" />
    <CardContent>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        variant="outlined"
        fullWidth={true}
        sx={{ marginBottom: '20px' }}
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        variant="outlined"
        fullWidth={true}
      />
      {/* {errorMessage && (
        <Typography color="error" textAlign="center" mt={2}>
          {errorMessage}
        </Typography>
      )} */}
    </CardContent>
    <Divider />
    <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button>Register</Button>
      <Button onClick={onLogin} color="success">
        Login
      </Button>
    </CardActions>
  </Card>
    )
}

export default Login