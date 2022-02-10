import React, { FC } from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ErrorUnauth from "./Pages/Errors/ErrorUnauth";
import Footer from "./Components/Footer/Footer";
import { UserProfile } from "./Pages/Profile/UserProfile";
import { Verify } from "./Pages/Verify/Verify";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import FriendsProvider from "./Context/FriendsProvider";
import { Event } from "./Pages/Event/Event";
import { VisitProfile } from "./Pages/Profile/VisitProfile";
import { Chat } from "./Pages/Chat/Chat";
import ChatChannelProvider from "./Context/ChatChannelProvider";



const AuthenticatedApp: FC = () => {
  return (
              <FriendsProvider>
<ChatChannelProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/chat" element={<Chat/>} />
        
        <Route path="/verify/:token" element={<Verify/>} />
        <Route path="/forgot/:token" element={<ForgotPassword />} />
        <Route path="/visit/:id" element={<VisitProfile />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path ="*" element={<ErrorUnauth/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </ChatChannelProvider>
    </FriendsProvider>
  );
};

export default AuthenticatedApp;
