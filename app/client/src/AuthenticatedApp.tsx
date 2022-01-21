import React, { FC } from "react";
import Home from "./Pages/Home/Home";
import UserProvider from "./Context/UserContext";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ErrorUnauth from "./Pages/Errors/ErrorUnauth";
import Footer from "./Components/Footer/Footer";
const AuthenticatedApp: FC = () => {
  return (
      <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path ="*" element={<ErrorUnauth/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </UserProvider>
  );
};

export default AuthenticatedApp;
