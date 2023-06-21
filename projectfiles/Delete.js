import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from "axios";
import './project.css';
const Cancel=()=>{
    const[roomno,setRoomno]=useState("");
    const delet = async(e)=>{
        e.preventDefault();
        let result=await
        axios.delete("http://localhost:8080/hostaa/delete/"+roomno);
        alert(result.data);
         }
    return(
        <div>
            <div class='delete'>
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
  <Button onClick={delet}>Delete</Button>
        </div>
        </div>
    )
}
export default Cancel;