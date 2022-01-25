import { Container } from "@mui/material";
import { FC } from "react";
import UnauthHeader from "../../Components/Header/UnauthHeader";
import Hero from "../../Components/Hero/Hero";

export const Home: FC = () => {
  return (
   <main>
      <UnauthHeader />
      <Hero />
      </main>
  );
};

export default Home;
