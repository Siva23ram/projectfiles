import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from "axios";
import './project.css';
import { useNavigate } from "react-router-dom";
const Update=()=>{
    let n=useNavigate()
    const[roomno,setRoomno]=useState("");
    const[fullname,setFullname]=useState("");
    const[phonenumber,setPhonenumber]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");
    const[roomtype,setRoomtype]=useState("");
    const update = async(e)=>{
        e.preventDefault();
        let mydaa={fullname:fullname,phonenumber:phonenumber,age:age,gender:gender,roomtype:roomtype}
        let result=await
        axios.put("http://localhost:8080/hostaa/edit/"+roomno,mydaa)
        alert(result.data);
        var m=result.data;
        if(m=="Updated"){
            n('/update')
        }
         }
    return(
        <div class="update">
            <div>
            <label>RoomNo :</label>
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
  </select><br/>
  <label>Username :</label>
            <input type="text" onChange={e=>setFullname(e.target.value)}/><br/>
            <label>Phonenumber :</label>
            <input type='number' onChange={e=>setPhonenumber(e.target.value)}/><br/>
                <label>Age :</label>
            <input  type='text' onChange={e=>setAge(e.target.value)}/><br/>
                <label>Gender :</label>
            <input type="text" onChange={e=>setGender(e.target.value)}/><br/>
            <label>Room type :</label>
            <input type="text" onChange={e=>setRoomtype(e.target.value)}/><br/>
            <Button onClick={update}>Update</Button>
        </div>
        </div>
    )
}
export default Update;