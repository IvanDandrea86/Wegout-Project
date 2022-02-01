import {FC, useContext} from "react"
import {gql,useQuery} from "@apollo/client"
import Loading from "../../Components/Utility/Loading";
import ErrorMess from "../../Components/Utility/ErrorMess";
import { Grid, Typography } from "@mui/material";
import { FriendsContext } from "../../Context/FriendsProvider";
import { AddFriendCard } from "../../Components/Card/friendCard";

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
    
    const {data,loading,error}=useQuery(FindAllUser)
    if (loading) return <Loading/>;
    if (error) return <ErrorMess/>;
    
    // console.log( Object.keys(data.findAllUser).map(elem=>{return data.findAllUser[elem]}))
    
    return (
        <Grid container spacing={0.5}>

        {data.findAllUser.filter((val:any) => {
          return val.lastname.toLowerCase().includes((friend.userName).toLowerCase())}).map((myname:any )=> (
            <Grid item key={myname._id} xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

            <AddFriendCard props={myname} key={myname.firstname} />
            </Grid>

              )
              )
}

              </Grid>
    )
}