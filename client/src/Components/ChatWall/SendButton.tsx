
import { useState, FC, Fragment } from "react";
import { gql, useMutation } from "@apollo/client";
import { FormControl, Grid, IconButton, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


const SEND_MESSAGE = gql`
  mutation($chat:String!,$body:String!){sendMessage(chat:$chat,body:$body){sender _id chat}}
`;

interface SendMessageProps {
  chatId: string;
}

export const SendMessage: FC<SendMessageProps> = ({ chatId }) => {
    const[message,setMessage]=useState("")
  const [sendMessage] = useMutation(SEND_MESSAGE);   

  const handleSend = async() => {
      try
   {console.log(chatId)
      await sendMessage({ variables: { chat: chatId, body:message }
 })
  setMessage("")
}
catch(err){
  console.log(err)
}
  };

  return (
<Fragment>
<Grid item xs={9}>
<FormControl fullWidth >
      <TextField value={message} onChange={(e)=>setMessage(e.target.value)} label="type your message..." variant="outlined"/>
    </FormControl>
</Grid>
<Grid item xs={1}>
    <IconButton aria-label="send"  color="secondary" onClick={()=>{handleSend()}}>
    <SendIcon/>
    </IconButton>
</Grid>
    
    </Fragment>
  );
};

export default SendMessage;








