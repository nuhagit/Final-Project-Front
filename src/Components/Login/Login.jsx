import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField, FormControlLabel, Checkbox } from '@mui/material'
import { login } from '../../../Services/auth.service'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const onLogin = async() => {
      const {result} = await login({email, password})
      console.log("Login correct")
      localStorage.setItem('token', result) 
      navigate('/dashboard')
    }

    const onSignUp = async() => {
        console.log("Redirected")
        navigate('/signup')
    }

    return (
        <Card sx={{ maxWidth: '500px', className:"marcos"}}>
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
                    type={showPassword ? 'text' : 'password'} 
                    variant="outlined"
                    fullWidth={true}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            color="primary"
                        />
                    }
                    label="Show Password"
                />
            </CardContent>
            <Divider />
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={onSignUp} color="success">Sign Up</Button>
                <Button onClick={onLogin} color="success">
                    Login
                </Button>
            </CardActions>
        </Card>
    )
}

export default Login
