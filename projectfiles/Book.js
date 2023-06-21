import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from "axios";
import './project.css';
import Booking from "../src/Booking";
const Book=()=>{
    const[mdata,setData]=useState([])
    const[roomno,setRoomno]=useState("");
    const[username,setUsername]=useState("");
    const[phonenumber,setPhonenumber]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");
    const[roomtype,setRoomtype]=useState("");
    const getdata= async(e)=>{
        e.preventDefault();
        let mydaa={roomno:roomno,username:username,phonenumber:phonenumber,age:age,gender:gender,roomtype:roomtype}
        let result=await
        axios.get("http://localhost:8080/hostaa/getdata"+username,mydaa);
        setData(result.data);
         }
         <Booking/>
        return(
            <div class="book">
            <Button onClick={getdata}>getdata</Button>
            <table>
                <tr>
                    <th>roomno</th>
                    <th>fullname</th>
                    <th>phonenumber</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>roomtype</th>
                </tr>
           
            {
                mdata.map((k)=>{
                    return <tr>
                                <td>{k.roomno}</td>
                                <td>{k.fullname}</td>
                                <td>{k.phonenumber}</td>
                                <td>{k.age}</td>
                                <td>{k.gender}</td>
                                <td>{k.roomtype}</td>
                            </tr>
                })
            }
            </table>
        </div>
    )
}
export default Book;