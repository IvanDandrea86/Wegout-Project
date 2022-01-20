import { FC } from "react"
import UnauthHeader from "../../Components/Header/UnauthHeader"
import Footer from "../../Components/Footer/Footer"
import Hero from "../Hero/Hero"
import LocalesProvider from '../../Context/LocalesProvider'


export const Home:FC=()=>{

    return(
        <div>
            <LocalesProvider>
            <UnauthHeader />
            <Hero/>
            <Footer/>
            </LocalesProvider>
        </div>
    )
}

export default Home;