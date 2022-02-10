import { FC, Fragment, useContext } from "react";

import Header from "../../Components/Header/Header";
import { ChatWall } from "../../Components/ChatWall/ChatWall";
import { Box, Grid} from "@mui/material";
import { ChatList } from "../../Components/ChatWall/ChatList";
import { ChatChannelContext } from "../../Context/ChatChannelProvider";
import { BackFab } from "../../Components/Utility/BackFab";

export const Chat: FC = () => {
const channel=useContext(ChatChannelContext)
  return (
    
    <Fragment>
      <Header />
      <Grid container xs={12} spacing={5} sx={{width:"100%",display:"flex",justifyContent:"center",alignItems:"start"}}>
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
