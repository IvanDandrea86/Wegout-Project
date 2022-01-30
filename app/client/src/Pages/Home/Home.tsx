import FilterProvider from "../../Context/FilterContext";
import { FC } from "react";
import Header from "../../Components/Header/Header";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Navbar from "../../Components/Navbar/Navbar";

export const Home: FC = () => {
  return (
    <main>
      <FilterProvider>
        <Header />
        <Navbar />
        <Dashboard />
      </FilterProvider>
    </main>
  );
};

export default Home;
