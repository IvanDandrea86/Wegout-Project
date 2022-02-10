import { gql, useQuery } from "@apollo/client";
import { List, ListItem, Paper } from "@mui/material"
import { FC, useContext, useEffect } from "react";
import { ChatChannelContext } from "../../Context/ChatChannelProvider";
import { UserContext } from "../../Context/UserContext";
import { UserCardList } from "../Card/UserCardList";
import ErrorMess from "../Utility/ErrorMess";
import Loading from "../Utility/Loading";

const FINDALLCHAT=gql`
 {findAllChat{users _id lastMessage}}
`
const NEWCHATSUB=gql`
subscription($userId:String!){chatAdded(userId:$userId){_id users}}`

interface IChat{
    _id:string;
    users:string[]
}


export const ChatList:FC=()=>{
    const user=useContext(UserContext)
    const {data,loading,error,subscribeToMore}=useQuery(FINDALLCHAT)
    const channel=useContext(ChatChannelContext)
    useEffect(() => {
      subscribeToMore({
        document: NEWCHATSUB,
        variables:{
          userId:user._id
        },
        updateQuery: (prev, { subscriptionData }) => { 
          
          if (!subscriptionData.data) return prev;
          const newChat = subscriptionData.data.chatAdded;  
          return {
            findAllChat: [...prev.findAllChat, newChat],
          };
        },
      });
    },[subscribeToMore,user._id]);
  
if (loading) return <Loading/>
if (error) return <ErrorMess/>



return (

    <Paper>
    <List className="list">
      {data.findAllChat.filter((val:any) => {
  return val.users.includes(user._id)}).map((val: IChat,key:number) => (
<ListItem button key={key} onClick={()=>{
  channel.setChatChannel(val._id)
  }} >
  <UserCardList id={val.users}/>
  
</ListItem>
))}
    </List>
  </Paper>
)

    
}