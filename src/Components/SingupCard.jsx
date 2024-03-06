import { useState } from "react";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField, FormControlLabel, Checkbox} from '@mui/material'
import { signup } from "../../Services/auth.service";
import { useNavigate } from 'react-router-dom'
import SelectAvailability from "./Select/SelectAvailability";
import SelectSex from "./Select/SelectSex";
import SelectGoal from "./Select/SelectGoal";
import './Login/SignLogin.css'

function Signup() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [age,setAge] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [sex, setSex] = useState('')
    const [availability, setAvailability] = useState('')
    const [goal, setGoal] = useState('')
    
    const onSignup = async() => {
        const data = await signup({username, email, password,age,height,weight,sex,availability,goal})
        localStorage.setItem('token', data.result) 
        navigate(`/dashboard`)
    }
    const onLogin = async() => {
        navigate('/')
    }
    const handleSex = (e) => {
       setSex(e.target.value)
    }
    
     const handleAvailability = (e) => {
         setAvailability(e.target.value)
         console.log(availability)
        }
        const handleGoal = (e) => {
           setGoal(e.target.value)
        }
        const handleKeyDown = (event) => {if (event.key === 'Enter') {onSignup()}};
    




   





    return (
        <Card id='login'sx={{ maxWidth: '500px', className:"marcos"}}>
            <CardHeader title="Sign Up" />
            <CardContent>
            <TextField
                    onChange={(e) => setUsername(e.target.value)}
                    label='Username'
                    variant="outlined"
                    fullWidth={true}
                    sx={{ marginBottom: '20px' }}
                    onKeyDown={handleKeyDown}
                />
                <TextField
                    onChange={(e) => setAge(e.target.value)}
                    label='Age'
                    variant="outlined"
                    fullWidth={true}
                    sx={{ marginBottom: '20px' }}
                    onKeyDown={handleKeyDown}
                />
               <SelectSex handleSex={handleSex} />
                <TextField
                    onChange={(e) => setHeight(e.target.value)}
                    label="Height(cm)"
                    variant="outlined"
                    fullWidth={true}
                    sx={{ marginBottom: '20px' }}
                    onKeyDown={handleKeyDown}
                />
                <TextField
                    onChange={(e) => setWeight(e.target.value)}
                    label="Weight(kg)"
                    variant="outlined"
                    fullWidth={true}
                    sx={{ marginBottom: '20px' }}
                    onKeyDown={handleKeyDown}
                />
               <SelectAvailability handleAvailability={handleAvailability} />
               <SelectGoal handleGoal={handleGoal} />
                 <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    variant="outlined"
                    type = 'email'
                    fullWidth={true}
                    sx={{ marginBottom: '20px' }}
                    onKeyDown={handleKeyDown}
                />
                <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    type={showPassword ? 'text' : 'password'} 
                    variant="outlined"
                    fullWidth={true}
                    onKeyDown={handleKeyDown}
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
                <Button onClick={onLogin} color="success">Login</Button>
                <Button onClick={onSignup} color="success">
                    SIGN UP
                </Button>
            </CardActions>
        </Card>
    )
}

export default Signup
