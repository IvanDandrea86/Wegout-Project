import { Container } from "@mui/material";
import { FC } from "react";
import Header from "../../Components/Header/Header";
import Dashboard from "../Dashboard/Dashboard";

export const Home: FC = () => {
  return (
    <Container>
      <Header />
      <Dashboard />
    </Container>
  );
};

export default Home;