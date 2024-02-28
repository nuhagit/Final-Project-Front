import { useState } from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField} from '@mui/material'

function Login() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = () => {
        console.log(email, password)
    }

    return (
        
    <Card sx={{ maxWidth: '500px' }}>
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