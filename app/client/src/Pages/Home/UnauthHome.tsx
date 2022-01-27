import { FC } from "react";
import UnauthHeader from "../../Components/Header/UnauthHeader";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer"
export const Home: FC = () => {
  return (
    <div>
      <UnauthHeader />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
