import FilterProvider from "../../Context/FilterContext";
import { FC, useContext } from "react";
import Header from "../../Components/Header/Header";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Navbar from "../../Components/Navbar/Navbar";
import { FriendsContext } from "../../Context/FriendsProvider";
import { FriendsResults } from "../Friends/FriendsResults";
import GeoProvider from "../../Context/GeoProvider";

export const Home: FC = () => {
  const search=useContext(FriendsContext)
  return (
    <main>

      <FilterProvider>
        <Header />
        <Navbar />
        {search.friends  ? <FriendsResults/>: 
       <GeoProvider>
        
       <Dashboard />
         </GeoProvider>
}
      </FilterProvider>
      
    </main>
  );
};

export default Home;
