import React from 'react';
import { TextField,Button } from "@material-ui/core";
import './style.css';
const Login : React.FC=()=>{

return(
        <div className="logincard">
      <div className="login">
      <h1>Login</h1>
      <br/>
      <br/>
      <TextField id="username" label="User name"></TextField>
      <br/>
      <TextField id="password" label="Password"></TextField>
      <Button id="submit" variant="contained" color="primary" >Submit</Button>
      
      <h5>if new user ?</h5>
      <a href="/signup"><h5>create account</h5></a>
    </div>
    </div>
    
);
};
export default Login;