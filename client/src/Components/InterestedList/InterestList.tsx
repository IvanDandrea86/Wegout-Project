import {FC, useContext} from "react"
import {gql,useQuery} from "@apollo/client"
import Loading from "../../Components/Utility/Loading";
import ErrorMess from "../../Components/Utility/ErrorMess";
import { Grid, Typography } from "@mui/material";
import { FriendsContext } from "../../Context/FriendsProvider";
import { FriendCard } from "../../Components/Card/friendCard";
import { UserContext } from "../../Context/UserContext";
import { IDetails } from "../../Types/types";

interface IProp{
  details:IDetails|undefined
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
export const InterestedList:FC<IProp>=({details})=>{
    const friend=useContext(FriendsContext)
    const user=useContext(UserContext)
    const {data,loading,error}=useQuery(FindAllUser)
    if (loading) return <Loading/>;
    if (error) return <ErrorMess/>;
  const lenght=  data.findAllUser.filter((val:any) => {
      return val.eventList.includes(details?.id)}).length
    let detailId=details?.id
  const youCome=user.eventList.includes(detailId as string)
    
    return (
        <Grid container spacing={2} sx={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
   <Grid item  xs={12} sm={6} md={6} sx={{m: 25,  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
     <Typography variant="h4" >
     There are {lenght} people coming    
     </Typography>
     {youCome ?
      <Typography variant="h4" >
     with you 
      </Typography>:
        <Typography variant="h4" >
        ...are you? 
         </Typography>
     }
   </Grid>
    
        {data.findAllUser.filter((val:any) => {
          return val.eventList.includes(details?.id)}).map((myname:any )=> (
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