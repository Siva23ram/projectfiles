import React from "react";
import Login2 from "./Login1";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./Homemain";
import Booking from "./Booking";
import Register from "./Register";
import Cancel from "./Delete";
import Update from "./Update";
import Book from "./Book";
let LoginPath=()=>{
    return(
        <Router>
        <Routes>
            <Route path="/" element={<Login2/>} />
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/Home1" element={<Home/>}/>
            <Route path="/booking" element={<Booking/>}></Route>
            <Route path="/cancel" element={<Cancel/>}></Route>
            <Route path="/update" element={<Update/>}></Route>
            <Route path="/book" element={<Book/>}></Route>
        </Routes>
        </Router>
    )
}
export default LoginPath;