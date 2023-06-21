import React, { useState } from "react";
import './project.css';
import { Button } from "@mui/material";
import axios from "axios";
let Booking=()=>
{
  const Boo = async (e) => { 
    e.preventDefault()
     if(roomno=="") {
      alert("please enter roomno")
       }
    else  if(fullname=="") {
    alert("please enter fullname")
    }
    else if(phonenumber=="") {
    alert("please enter phonenumber")
     }
     else if(age=="") {
      alert("please enter age")
       }
       else if(gender=="") {
        alert("please enter gender")
         }
         else if(roomtype=="") {
          alert("please enter roomtype")
           }
    else {
      let mydaa={roomno:roomno,fullname:fullname,phonenumber:phonenumber,age:age,gender:gender,roomtype:roomtype}
        let result=await
    axios.post("http://localhost:8080/hostaa/postdataaa",mydaa)
    alert(result.data)
    }}
  const[roomno,setRoomno]=useState("");
  const[fullname,setFullname]=useState("");
  const[phonenumber,setPhonenumber]=useState("");
  const[age,setAge]=useState("");
  const[gender,setGender]=useState("");
  const[roomtype,setRoomtype]=useState("");
   
    return(
        <div  class='bo'>
            
                <h1>Enter your Details</h1>
            Full Name :    
            <input style={{marginBottom:'20px'}} type='text' onChange={e=>setFullname(e.target.value)} required></input><br/>
           
            Phone Number :
            <input style={{marginBottom:'20px'}} type='text' min={10} max={11} onChange={e=>setPhonenumber(e.target.value)} required></input><br/>
             Age :
            <input style={{marginBottom:'20px'}} type='text' onChange={e=>setAge(e.target.value)} required></input><br/>
           
            
          <label for="Gender"> Gender:</label>

<select style={{marginBottom:'20px'}} onChange={e=>setGender(e.target.value)} name="gender" id="gender">
  <option>select</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
  
  
</select>
<br/>
<label style={{marginBottom:'20px'}}  for="RoomNo">Room No:</label>

<select onChange={e=>setRoomno(e.target.value)}
name="RoomNo" id="RoomNo">
  <option>select</option>
  <option value="101">101</option>
  <option value="102">102</option>
  <option value="103">103</option>
  <option value="104">104</option>
  <option value="105">105</option>
  <option value="106">106</option>
  <option value="107">107</option>
  <option value="108">108</option>
  <option value="109">109</option>
  <option value="110">110</option>
  <option value="111">111</option>
  <option value="112">112</option>
  <option value="113">113</option>
  <option value="114">114</option>
  <option value="115">115</option>
  <option value="116">116</option>
  <option value="117">117</option>
  <option value="118">118</option>
  <option value="119">119</option>
  <option value="120">120</option>
  </select>
  <br/>
  <div style={{marginTop:'20px'}}>
  <label for="Roomtype">Room Type:</label>

<select onChange={e=>setRoomtype(e.target.value)} name="Roomtype" id="Roomtype">
  <option>select</option>
  <option value="AC">AC</option>
  <option value="Non AC">NonAC</option>
  </select>
</div>
<br/>
<Button type='submit' onClick={Boo}>Book</Button><br/>
</div>
        
    )
}
export default Booking;