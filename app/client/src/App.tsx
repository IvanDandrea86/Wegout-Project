import "./App.css";
import { useContext,useEffect} from "react";
import { AuthContext } from "./Context/AuthContext";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { ThemeProvider } from "@mui/material";

import * as React from 'react';
import {CustomThemeContext} from './Context/CustomThemeProvider'
import { languageContext } from "./Context/LocalesProvider";

function App() {
  const { theme } = useContext(CustomThemeContext)
  const context =useContext(AuthContext)
  const {setLanguage}=React.useContext(languageContext)

  useEffect(() => {
    if(window.localStorage.getItem("lang")){
      setLanguage(window.localStorage.getItem("lang"))
    }
  });


  return (
    
      <ThemeProvider theme={theme}>
        {context.auth ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ThemeProvider>
   
  );
}

export default App;
