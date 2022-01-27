import React,{FC}from "react";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register"
import UnauthHome from "./Pages/Home/UnauthHome"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ErrorUnauth from "./Pages/Errors/ErrorUnauth"
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import NavigatioProvider from "./Context/NavContext"



const UnauthenticatedApp:FC =()=>{
  
  
  return(
    <NavigatioProvider>
        <BrowserRouter>
       <Routes>
          <Route path="/" element={<UnauthHome/>} />
     
          <Route path="/forgot/:token" element={<ForgotPassword />} />
          <Route path ="*" element={<ErrorUnauth/>} />
        </Routes>
   
      </BrowserRouter>
  </NavigatioProvider>
    )
}

export default UnauthenticatedApp;