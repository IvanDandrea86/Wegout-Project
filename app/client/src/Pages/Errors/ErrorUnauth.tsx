import { FC } from "react"
import Link from '@mui/material/Link'


export const ErrorUnauth:FC=()=>{

    return(
        <div>
            Unauthorized Access
            <Link href="/">Back Home</Link>
        </div>
    )
}

export default ErrorUnauth;