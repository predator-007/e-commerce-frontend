import React, { useState } from 'react';
import {TextField,Button} from '@material-ui/core';
import './style.css';
import Axios from 'axios';
const Signup:React.FC =()=>{
    const [username,setusername]=useState<string>("");
    const [email,setemail]=useState<string>("");
    const [password,setpassword]=useState<string>("");
    const [confirmp,setconfirmp]=useState<string>("");
    const [status,setstatus]=useState<string>("");
    const handlesubmit=async()=>{
      const data=await Axios.post("https://e-commerce--backend.herokuapp.com/user/signup"
     , 
     {
        username:username,
        email:email,
        password:password,
      }
      ).then(res=>{
        console.log(res.data);
        return res.data;
      }).catch(err=>console.log(err));
      if(data=="username already exits" || data==="email already exits")
        setstatus(data);
      else
        setstatus(data+" please login");
    }
    return(
        <div className="logincard">
      <div className="login">
      <h1>sign in</h1>
      <br/>
      <br/>
      <TextField id="username" label="User name" onChange={(e)=>{setusername(e.target.value)}}></TextField>
      <br/>
      <TextField id="email" label="email" onChange={(e)=>{setemail(e.target.value)}}></TextField>
      <br/>
      <TextField id="password" label="Password" onChange={(e)=>{setpassword(e.target.value)}}></TextField>
      <br/>
      <TextField id="confirmpassword" label="confirm password" onChange={(e)=>{setconfirmp(e.target.value)}}></TextField>
      
      <Button id="submit" variant="contained" color="primary" onClick={(e)=>handlesubmit()}>Submit</Button>
      
      <h5>if already registered </h5>
      <a href="/login"><h5>Login</h5></a>
      <h5 id="status">{status}</h5>
    </div>
    </div>
    );
};
export default Signup;