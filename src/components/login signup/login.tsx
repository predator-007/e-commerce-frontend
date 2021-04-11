import React, { useState } from 'react';
import { TextField,Button } from "@material-ui/core";
import './style.css';
import { useDispatch,useSelector } from "react-redux";
import { useraction } from "../../react-redux/actions/user";
import Axios from 'axios';
import { tokenaction } from '../../react-redux/actions/token';
const Login : React.FC=()=>{
  const dispatch=useDispatch();
  const [email,setemail]=useState<string >("");
  const [password,setpassword]=useState<string>("");
  const [status,setstatus]=useState<string>("");
  const handlesubmit=async ()=>{
    const data= await Axios.post("https://e-commerce--backend.herokuapp.com/user/login"
    ,
    {
      email:email,
      password:password,
    }
    ).then(res=>{
      console.log(res.data);
      return res.data;
    }).catch(err=>{console.log(err)});
    if(data==="user does not exists" || data==="incorrect password"){
      setstatus(data);
    }
    else{
        dispatch(useraction("logged in"));
        dispatch(tokenaction(data));
    }
  }
return(
      <body>
      <div className="logincard">
      <div className="login">
      <h1>Login</h1>
      <br/>
      <br/>
      <TextField id="email" label="Email" onChange={(e)=>{setemail(e.target.value)}}></TextField>
      <br/>
      <TextField id="password" label="Password" onChange={(e)=>{setpassword(e.target.value)}}></TextField>
      <Button id="submit" variant="contained" color="primary" onClick={(e)=>{handlesubmit()}}>Submit</Button>
      <h5>if new user ?</h5>
      <a href="/signup"><h5>create account</h5></a>
      <h5 id="status">{status}</h5>
    </div>
    </div>
    </body>
);
};
export default Login;