import {FC, useContext} from "react"
import {gql,useQuery} from "@apollo/client"
import Loading from "../../Components/Utility/Loading";
import ErrorMess from "../../Components/Utility/ErrorMess";
import { Grid } from "@mui/material";
import { FriendsContext } from "../../Context/FriendsProvider";
import { FriendCard } from "../../Components/Card/friendCard";
import { UserContext } from "../../Context/UserContext";
interface IProps{
    details:any,
  }
const FindAllUser=gql`

{findAllUser{
  _id
  email
  isVerified
  firstname
  lastname
  eventList
}}
`
export const InterestedList:FC<IProps>=({details})=>{
    const friend=useContext(FriendsContext)
    const user=useContext(UserContext)
    const {data,loading,error}=useQuery(FindAllUser)
    if (loading) return <Loading/>;
    if (error) return <ErrorMess/>;
    
    
    return (
        <Grid container spacing={2} sx={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>

        {data.findAllUser.filter((val:any) => {
          return val.eventList.includes(details.id)}).map((myname:any )=> (
            <Grid item key={myname._id} xs={12} sm={6} md={6} sx={{m: 5,  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {myname.email ===user.email ? null:
            <FriendCard props={myname} key={myname.firstname} />
}
            </Grid>
              )
              )
}

               </Grid>
    )
}