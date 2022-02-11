import { FC, Fragment, useContext } from "react";

import Header from "../../Components/Header/Header";
import { ChatWall } from "../../Components/ChatWall/ChatWall";
import { Grid} from "@mui/material";
import { ChatList } from "../../Components/ChatWall/ChatList";
import { ChatChannelContext } from "../../Context/ChatChannelProvider";

export const Chat: FC = () => {
const channel=useContext(ChatChannelContext)
  return (
    
    <Fragment>
      <Header />
      <Grid container spacing={5} sx={{width:"100%",display:"flex",justifyContent:"center",alignItems:"start"}}>
        <Grid item xs={4} className={"borderRight500"}>
        <ChatList/>
        </Grid>
        <Grid item xs={8} sx={{alignSelf:"start"}} >
          <ChatWall chatId={channel.chatChannel}/>
        </Grid>
       
      </Grid>
</Fragment> 
 );
};
