import "./App.css";
import { useContext,} from "react";
import { AuthContext } from "./Context/AuthContext";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import {  ThemeProvider } from "@mui/material";
import AuthProvider from './Context/AuthContext'
import {  themeLight } from "./themes/themes";





function App() {
  
  
  const context =useContext(AuthContext)
  

  return (
    
    <AuthProvider>
      <ThemeProvider theme={themeLight}>
     {context.auth ? <AuthenticatedApp /> : <UnauthenticatedApp />
      } 
      </ThemeProvider>
</AuthProvider>
         
        );
}

export default App;
