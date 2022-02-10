import { FC, Fragment, useContext, useEffect } from "react"
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
import { MessageBubble } from "./MessageBox";


const GETCHAT=gql`
     query($chatid:String!)
        {getMessages(chatid:$chatid){sender body chat createdAt}}    
`
const CHAT_SUB=gql`
subscription($id:String!){messageSent(chatid:$id){ sender body chat createdAt}}
`

interface SendMessageProps {
  chatId: string;
}


export const ChatWall:FC<SendMessageProps>=({chatId})=>{
 
const channel=useContext(ChatChannelContext)
   const user=useContext(UserContext)
    const generator = new AvatarGenerator();
  const avatar = generator.generateRandomAvatar(user.email as string);
    const{data,loading,error,subscribeToMore}=useQuery(GETCHAT,{variables:{
        chatid:chatId
    }})
    useEffect(() => {
        
        subscribeToMore({
          document: CHAT_SUB,
          variables:{
            id:channel.chatChannel
          },
          updateQuery: (prev, { subscriptionData }) => { 
            
            if (!subscriptionData.data) return prev;
            const newMessage = subscriptionData.data.messageSent;  
            return {
                getMessages: [...prev.getMessages, newMessage],
            };
          },
        });
      },[subscribeToMore,channel.chatChannel]);
    if (loading){return <Loading/>}
    if(error){return <ErrorMess/>}
    return(
<Fragment>

        <Paper elevation={5}>

            <Box p={3}>
            <Typography variant="h4" gutterBottom>WeGoChat 1.0v</Typography>
            <Divider/>
            <Grid container spacing={4} alignItems={"center"}>
<Grid item   id="chat-window" xs={12} sx={chatWindowStyle}>
    <List id="chat-messages" sx={chatMessageStyle}>
     {data.getMessages.map((chatMessageDto:any,index:number)=>(
               <ListItem  key={index} >
                   {(chatMessageDto.sender===user._id) ? 
                   <MessageBubble align="right" name={chatMessageDto.sender}  body={chatMessageDto.body} date={chatMessageDto.createdAt}/>
                   :
                   <MessageBubble align="left" name={chatMessageDto.sender} body={chatMessageDto.body} date={chatMessageDto.createdAt}/>
                
        }
               </ListItem>
       ))}   
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