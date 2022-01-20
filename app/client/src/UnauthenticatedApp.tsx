
import React,{FC}from "react";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register"
import Home from "./Pages/Home/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom";

const UnauthenticatedApp:FC =()=>{
  
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    )
}

export default UnauthenticatedApp;