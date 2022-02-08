import { Fragment, useContext, useEffect } from "react"
import { Avatar, Box, Divider, FormControl, Grid,  List, ListItem, ListItemText, Paper, Typography } from "@mui/material"
import {chatMessageStyle,chatWindowStyle} from "./Chat.style"
import { UserContext } from "../../Context/UserContext";
import { AvatarGenerator } from "random-avatar-generator";
import { BackFab } from "../Utility/BackFab";
import { gql, useQuery } from "@apollo/client";
import { ChatChannelContext } from "../../Context/ChatChannelProvider";

import Loading from "../Utility/Loading";
import ErrorMess from "../Utility/ErrorMess";
import SendMessage from "./SendButton";


const GETCHAT=gql`
     query($chat:String!)
        {getMessages(chat:$chat){sender body}}    
`
const CHAT_SUB=gql`
subscription{messageSent{ sender body}}
`




export const ChatWall=()=>{
    var listChatMessages:any
    const channel=useContext(ChatChannelContext)
    const user=useContext(UserContext)
    const generator = new AvatarGenerator();
  const avatar = generator.generateRandomAvatar(user.email as string);
   
    const{data,loading,error,subscribeToMore}=useQuery(GETCHAT,{variables:{
        chat:channel.chatChannel
    }})
    useEffect(() => {
        subscribeToMore({
          document: CHAT_SUB,
          updateQuery: (prev, { subscriptionData }) => {
              console.log(subscriptionData,"subdata")
              console.log(prev,"prev")
            if (!subscriptionData.data) return prev;
            const newChat = subscriptionData.data.messageSent;
            console.log(newChat,"newChat")
            console.log(typeof newChat)
            return {
                getMessages: [...prev.getMessages, newChat],
            };
          },
        });
      },[]);
    if (loading){return <Loading/>}
    if(error){return <ErrorMess/>}
    console.log(data.getMessages)

 if(data.getMessages){
        listChatMessages=data.getMessages.map((chatMessageDto:any,index:number)=>(
               <ListItem key={index}>
                   <ListItemText primary={`${chatMessageDto.sender}:${chatMessageDto.body} `}></ListItemText>
               </ListItem>
       ))
        }
  
    
   
    return(
<Fragment>

        <Paper elevation={5}>

            <Box p={3}>
            <Typography variant="h4" gutterBottom>WeGoChat 1.0v</Typography>
            <Divider/>
            <Grid container spacing={4} alignItems={"center"}>
<Grid item   id="chat-window" xs={12} sx={chatWindowStyle}>
    <List id="chat-messages" sx={chatMessageStyle}>
     {listChatMessages}   
    </List>
</Grid>
<Grid item xs={2}>
    <FormControl fullWidth>
    <Avatar src={avatar} sx={{ width: "4rem", height: "4rem" }} />
    </FormControl>
</Grid>
    <SendMessage chatId={channel.chatChannel} />
            </Grid>
            </Box>
        </Paper>
        <BackFab/>
    </Fragment>
    )
}