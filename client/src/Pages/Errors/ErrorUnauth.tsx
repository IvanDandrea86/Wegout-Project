import { FC } from "react"
import Link from '@mui/material/Link'


export const ErrorUnauth:FC=()=>{

    return(
        <div>
            ERROR 404-
            Unauthorized Access
            <Link href="/">Back Home</Link>
        </div>
    )
}

export default ErrorUnauth;