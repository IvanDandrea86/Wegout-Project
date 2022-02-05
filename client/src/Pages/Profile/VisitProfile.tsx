import {FC} from "react"
import { useParams } from "react-router-dom"
import Header from "../../Components/Header/Header"
import {ProfileID} from "../../Components/Profile/ProfileID"

export const VisitProfile:FC=()=>{
const {id}=useParams()
    return (
        <div>
<Header/>
<ProfileID id={id}/>
        </div>
    )
}