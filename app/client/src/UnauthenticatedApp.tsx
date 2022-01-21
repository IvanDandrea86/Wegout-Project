
import React,{FC}from "react";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register"
import UnauthHome from "./Pages/Home/UnauthHome"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer"
import ErrorUnauth from "./Pages/Errors/ErrorUnauth"

const UnauthenticatedApp:FC =()=>{
  
    return(
        <BrowserRouter>
       <Routes>
          <Route path="/" element={<UnauthHome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path ="*" element={<ErrorUnauth/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    )
}

export default UnauthenticatedApp;