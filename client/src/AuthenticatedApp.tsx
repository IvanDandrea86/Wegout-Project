import React, { FC } from "react";
import Home from "./Pages/Home/Home";
import UserProvider from "./Context/UserContext";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ErrorUnauth from "./Pages/Errors/ErrorUnauth";
import Footer from "./Components/Footer/Footer";
import { UserProfile } from "./Pages/Profile/UserProfile";
import { Verify } from "./Pages/Verify/Verify";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import FriendsProvider from "./Context/FriendsProvider";
import { Event } from "./Pages/Event/Event";
import { VisitProfile } from "./Pages/Profile/VisitProfile";
const AuthenticatedApp: FC = () => {
  return (
     <UserProvider>
              <FriendsProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/verify/:token" element={<Verify/>} />
        <Route path="/forgot/:token" element={<ForgotPassword />} />
        <Route path="/visit/:id" element={<VisitProfile />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path ="*" element={<ErrorUnauth/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
    </FriendsProvider>
    </UserProvider>
  );
};

export default AuthenticatedApp;
