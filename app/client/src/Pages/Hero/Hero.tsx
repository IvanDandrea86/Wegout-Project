import { FC } from "react"
import {Link} from "@mui/material"


export const Hero:FC=()=>{

    return(
        <div>

            <Link href="/login" variant="body2">SignUp</Link>
            <Link href="/login" variant="body2">Login</Link>
        </div>
    )
}

export default Hero;