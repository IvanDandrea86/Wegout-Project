import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import  Login  from "./Pages/Login/Login";
import {Hero} from"./Pages/Hero/Hero"
import {Dashboard} from "./Pages/Dashboard/Dashboard"
import Register from "./Pages/Register/Register"

function App() {
  return (
   
        <BrowserRouter>
        <Routes>
          <Route path="/login"  element={<Login/>}/>
          <Route path="register" element ={<Register/>}/>
          <Route  path="/" element={<Hero/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
         </ BrowserRouter >
  );
}

export default App;
