import { Container } from "@mui/material";
import { FC } from "react";
import Header from "../../Components/Header/Header";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Navbar from "../../Components/Navbar/Navbar";

export const Home: FC = () => {
  return (
<main>
      <Header />
      <Navbar/>

      <Dashboard />
      </main>
  );
};

export default Home;
