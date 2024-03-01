import { useState } from "react";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField, FormControlLabel, Checkbox } from '@mui/material'
import { signup } from "../../Services/authService";

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [age,setAge] = useState('')
    const [sex, setSex] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [availability, setAvailability] = useState('')
    const [goal, setGoal] = useState('')



    const onSignup = async() => {
      const {result} = await signup({email, password,age,sex,height,weight,availability,goal})
      console.log("Login correct")
      localStorage.setItem('token', result) 

    }
    return (
        <Card sx={{ maxWidth: '500px', className:"marcos"}}>
            <CardHeader title="Sign Up" />
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
                <TextField
                    onChange={(e) => setAge(e.target.value)}
                    label='Age'
                    type={showPassword ? 'text' : 'age'} 
                    variant="outlined"
                    fullWidth={true}
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    onChange={(e) => setSex(e.target.value)}
                    label="Sex"
                    type={showPassword ? 'text' : 'sex'} 
                    variant="outlined"
                    fullWidth={true}
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    onChange={(e) => setHeight(e.target.value)}
                    label="Height"
                    type={showPassword ? 'text' : 'height'} 
                    variant="outlined"
                    fullWidth={true}
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    onChange={(e) => setWeight(e.target.value)}
                    label="Weight"
                    type={showPassword ? 'text' : 'weight'} 
                    variant="outlined"
                    fullWidth={true}
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    onChange={(e) => setAvailability(e.target.value)}
                    label="Availability"
                    type={showPassword ? 'text' : 'availability'} 
                    variant="outlined"
                    fullWidth={true}
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    onChange={(e) => setGoal(e.target.value)}
                    label="Goal"
                    type={showPassword ? 'text' : 'goal'} 
                    variant="outlined"
                    fullWidth={true}
                />
            </CardContent>
            <Divider />
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button>Register</Button>
                <Button onClick={onSignup} color="success">
                    Login
                </Button>
            </CardActions>
        </Card>
    )
}

export default Signup