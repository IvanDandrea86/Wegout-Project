import { Avatar, Typography } from "@mui/material"
import { FC, Fragment, useContext, useState } from "react"
import {gql,useQuery} from "@apollo/client"
import { AvatarGenerator } from "random-avatar-generator";
import Loading from "../Utility/Loading";
import ErrorMess from "../Utility/ErrorMess";
import { UserContext } from "../../Context/UserContext";



const GETUSERBYID = gql`
  query ($_id: String!) {
    findUserById(user_id: $_id) {
      firstname
      lastname
      location
      email
      info {
        age
        bio
        interest
        job
      }
      isVerified
    }
  }
`; 
interface IUserCardProp{
    id:string[];
}

export const UserCardList:FC<IUserCardProp>=(id)=>{
    const user=useContext(UserContext)
    const fiteredUser=id.id.filter(value=> value !== user._id)
    const elem:string=fiteredUser[0]
    const {data,loading,error}=useQuery(GETUSERBYID,{variables:{
    _id:elem
  }})
 
  if (loading)return <Loading/>
  if(error)return <ErrorMess/>


  const FullName = data.findUserById.firstname + " " + data.findUserById.lastname;
  const generator = new AvatarGenerator();
  const avatar =  generator.generateRandomAvatar(data.findUserById.email as string );
  
    return (
        <Fragment>
            <Avatar src={avatar}></Avatar>
            <Typography  variant="h6" color="inherit">
              {FullName}
            </Typography>
      </Fragment>
    )
}
