import {FC, useContext} from "react"
import {gql,useQuery} from "@apollo/client"
import Loading from "../../Components/Utility/Loading";
import ErrorMess from "../../Components/Utility/ErrorMess";
import { Grid } from "@mui/material";
import { FriendsContext } from "../../Context/FriendsProvider";
import { FriendCard } from "../../Components/Card/friendCard";
import { UserContext } from "../../Context/UserContext";

const FindAllUser=gql`

{findAllUser{
  _id
  email
  isVerified
  firstname
  lastname
  
}}
`


export const FriendsResults:FC=()=>{
    const friend=useContext(FriendsContext)
    const user=useContext(UserContext)
    const {data,loading,error}=useQuery(FindAllUser)
    if (loading) return <Loading/>;
    if (error) return <ErrorMess/>;
    
    
    return (
        <Grid container spacing={0.5} sx={{height: "83wh",display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>

        {data.findAllUser.filter((val:any) => {
          return val.lastname.toLowerCase().includes((friend.userName).toLowerCase())}).map((myname:any )=> (
            <Grid item key={myname._id} xs={12} sm={3} md={3} sx={{height: "83wh",m: 5,  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
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