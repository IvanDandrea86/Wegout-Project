import React, { FC } from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UserProvider from "./Context/UserContext";
import { BrowserRouter,Route,Routes } from "react-router-dom";

const AuthenticatedApp: FC = () => {
  return (
      <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
};

export default AuthenticatedApp;
