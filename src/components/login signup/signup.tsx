import React from 'react';
import {TextField,Button} from '@material-ui/core';
import './style.css';
const Signup:React.FC =()=>{

    return(
        <div className="logincard">
      <div className="login">
      <h1>sign in</h1>
      <br/>
      <br/>
      <TextField id="username" label="User name"></TextField>
      <br/>
      <TextField id="email" label="email"></TextField>
      <br/>
      <TextField id="password" label="Password"></TextField>
      <br/>
      <TextField id="confirmpassword" label="confirm password"></TextField>
      
      <Button id="submit" variant="contained" color="primary" >Submit</Button>
      
      <h5>if already registered </h5>
      <a href="/login"><h5>Login</h5></a>
    </div>
    </div>
    );
};
export default Signup;