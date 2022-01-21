import { Container } from "@mui/material";
import { FC } from "react";
import UnauthHeader from "../../Components/Header/UnauthHeader";
import Hero from "../../Components/Hero/Hero";

export const Home: FC = () => {
  return (
    <Container>
      <UnauthHeader />
      <Hero />
    </Container>
  );
};

export default Home;
