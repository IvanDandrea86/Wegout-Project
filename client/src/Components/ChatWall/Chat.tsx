import { Fragment, useContext, useState } from "react"
import Container from '@mui/material/Container'
import { Avatar, Box, Divider, FormControl, Grid, IconButton, List, ListItem, ListItemText, Paper, TextField, Typography } from "@mui/material"
import {chatMessageStyle,chatWindowStyle} from "./Chat.style"
import SendIcon from '@mui/icons-material/Send';
import { UserContext } from "../../Context/UserContext";
import { AvatarGenerator } from "random-avatar-generator";


class IChatMess{
    user:string;
    message:string;
    constructor(user:string,message:string)
{    
    this.user=user;
    this.message=message;
}
}




export const Chat=()=>{
    const user=useContext(UserContext)
    const generator = new AvatarGenerator();
  const avatar = generator.generateRandomAvatar(user.email as string);
    const [chatMessages,setMessages]=useState([new IChatMess("Ivan","Ciao my first message")])
    const[message,setMessage]=useState("")
   
    const listChatMessages=chatMessages.map((chatMessageDto,index)=>(
            <ListItem key={index}>
                <ListItemText primary={`${chatMessageDto.user}:${chatMessageDto.message} `}></ListItemText>
            </ListItem>
    ))
    return(
<Fragment>
    <Container maxWidth="xs" >
        <Paper elevation={5}>
            <Box p={3}>
            <Typography variant="h4" gutterBottom>Who is going out?</Typography>
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
<Grid item xs={9}>
<FormControl fullWidth>
      <TextField value={message} onChange={(e)=>setMessage(e.target.value)} label="type your message..." variant="outlined"/>
    </FormControl>
</Grid>
<Grid item xs={1}>
    <IconButton aria-label="send"  color="secondary" onClick={()=>{}}>
    <SendIcon/>
    </IconButton>
</Grid>
            </Grid>
            </Box>
        </Paper>
    </Container>
    </Fragment>
    )
}