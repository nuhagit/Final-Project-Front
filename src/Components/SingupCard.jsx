import { useState } from "react";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField, FormControlLabel, Checkbox} from '@mui/material'
import { signup } from "../../Services/auth.service";
import SelectAvailability from "./Select/SelectAvailability";
import SelectSex from "./Select/SelectSex";
import SelectGoal from "./Select/SelectGoal";


function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [age,setAge] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
   



    const onSignup = async() => {
      const {result} = await signup({username, email, password,age,height,weight})
      console.log("Login correct")
      localStorage.setItem('token', result) 

    }
    return (
        <Card sx={{ maxWidth: '500px', className:"marcos"}}>
            <CardHeader title="Sign Up" />
            <CardContent>
            <TextField
                    onChange={(e) => setUsername(e.target.value)}
                    label='Username'
                    variant="outlined"
                    fullWidth={true}
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    onChange={(e) => setAge(e.target.value)}
                    label='Age'
                    variant="outlined"
                    fullWidth={true}
                    sx={{ marginBottom: '20px' }}
                />
                <SelectSex/>
                <TextField
                    onChange={(e) => setHeight(e.target.value)}
                    label="Height"
                    variant="outlined"
                    fullWidth={true}
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    onChange={(e) => setWeight(e.target.value)}
                    label="Weight"
                    variant="outlined"
                    fullWidth={true}
                    sx={{ marginBottom: '20px' }}
                />
                <SelectAvailability
                
                />
               <SelectGoal />
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
              
                <Button onClick={onSignup} color="success">
                    SIGN UP
                </Button>
            </CardActions>
        </Card>
    )
}

export default Signup
