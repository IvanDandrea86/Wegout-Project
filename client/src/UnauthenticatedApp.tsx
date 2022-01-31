import React,{FC}from "react";
  
import UnauthHome from "./Pages/Home/UnauthHome"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ErrorUnauth from "./Pages/Errors/ErrorUnauth"
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import NavigatioProvider from "./Context/NavContext"
import { Verify } from "./Pages/Verify/Verify";



const UnauthenticatedApp:FC =()=>{
  
  
  return(
    <NavigatioProvider>
        <BrowserRouter>
       <Routes>
          <Route path="/" element={<UnauthHome/>} />
          <Route path="/verify/:token" element={<Verify/>} />
          <Route path="/forgot/:token" element={<ForgotPassword />} />
          <Route path ="*" element={<ErrorUnauth/>} />
        </Routes>
      </BrowserRouter>
  </NavigatioProvider>
    )
}

export default UnauthenticatedApp;