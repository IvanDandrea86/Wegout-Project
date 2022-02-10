import { FC, useContext } from "react";

import Header from "../../Components/Header/Header";
import { ChatWall } from "../../Components/ChatWall/ChatWall";
import { Box, Grid} from "@mui/material";
import { ChatList } from "../../Components/ChatWall/ChatList";
import { ChatChannelContext } from "../../Context/ChatChannelProvider";

export const Chat: FC = () => {
const channel=useContext(ChatChannelContext)
  return (
    <div>
      <Header />
      <Box sx={{backgroundColor:"GrayText", minHeigth:"100vh"}}>
      <Grid container spacing={0} >
        <Grid item xs={4} className={"borderRight500"}>
        <ChatList/>
        </Grid>
        <Grid item xs={8}>
          <ChatWall chatId={channel.chatChannel}/>
        </Grid>
      </Grid>
              </Box>
    </div>
  );
};
