import { gql, useQuery } from "@apollo/client";
import { List, ListItem, Paper, Typography } from "@mui/material"
import { FC, useContext } from "react";
import { ChatChannelContext } from "../../Context/ChatChannelProvider";
import { UserContext } from "../../Context/UserContext";
import { UserCardList } from "../Card/UserCardList";
import ErrorMess from "../Utility/ErrorMess";
import Loading from "../Utility/Loading";

const FINDALLCHAT=gql`
 {findAllChat{users _id lastMessage}}
`
interface IChat{
    _id:string;
    users:string[]
}


export const ChatList:FC=()=>{
    const user=useContext(UserContext)
    const {data,loading,error}=useQuery(FINDALLCHAT)
    const channel=useContext(ChatChannelContext)
if (loading) return <Loading/>
if (error) return <ErrorMess/>
return (

    <Paper>
    <List className="list">
      {data.findAllChat.filter((val:any) => {
          return val.users.includes(user._id)}).map((val: IChat,key:number) => (
        <ListItem button key={key} onClick={()=>{
          console.log(val._id)
          channel.setChatChannel(val._id)}} >
          <UserCardList id={val.users}/>
          
        </ListItem>
      ))}
    </List>
  </Paper>
)

    
}