import React ,{useState}from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import './project.css';
import { useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';
let Login2=()=>
{
    let n= useNavigate()
    const Login = async (e) => { 
        e.preventDefault()
         if(username=="") {
        alert("please enter username")
        }
        else if(password=="") {
        alert("please enter password")
         }
        else {
            let result=await
        axios.post("http://localhost:8089/hostaa/login/"+username+"/"+password)
        alert(result.data)
        var res=result.data;
        if(res=="success"){
            n('/Home1')
        }
        else{
            n("/")
        }

        }}
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    
    return(
            
      <div class='abc'>...
<nav>




        <div class='log'>
        <div class='bacimg'>
        <h1 style={{textAlign:'center'}}>Login</h1>
        <label>Username</label><br/>
        <input  type='text' value={username} onChange={e=>setUsername(e.target.value)}></input><br/>
        <label>Password</label><br/>
        <input type='text' value={password} onChange={e=>setPassword(e.target.value)}></input><br/>
        <Button variant='outline' onClick={Login}>Login</Button>
        <p>New user <a href='/Register'>Signup</a></p>
              </div>  
            </div>
            </nav>
            </div>
        
    )
}
export default Login2;