import React ,{useState} from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import './project.css';
import { useNavigate } from 'react-router-dom';
let Register=()=>
{ 
    let n=useNavigate()
    const Saved=async(e)=>{
        e.preventDefault();
        let mydaa={username:lusername,email:lemail,password:lpassword}
        if(lusername==''){
            alert("enter user name")
        }
        else if(lemail==''){
            alert("enter email")
        }
        else if(lpassword==''){
            alert("enter password")
        }
        else{
        let result=await axios.post("http://localhost:8089/hostaa/postdataaa",mydaa);
        alert(result.data)
        var res=result.data;
        if(res=="added"){
            n("/")
        }
    }
    }
     const [lusername,setUsername]=useState("");
     const [lemail,setEmail]=useState("");
     const [lpassword,setPassword]=useState("");
    return(
                 <div class='reg'>
                    <h2 class="head">Sign up</h2><br/>
                    <label>Username :</label><br/>
                    <input type='text' required  onChange={e=>setUsername(e.target.value)}/><br/>
                    <label>Email :</label><br/>
                    <input type='email' required  onChange={e=>setEmail(e.target.value)}/><br/>
                    <label>Password :</label><br/>
                    <input type='password'required onChange={e=>setPassword(e.target.value)}/><br/>
            <Button onClick={Saved}>SignUp</Button><br/> 
            <p>Already have account <a href='/'>Login</a></p>
            </div>
    )}
export default Register;