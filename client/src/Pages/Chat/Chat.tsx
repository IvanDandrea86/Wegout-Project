import { FC } from "react";

import Header from "../../Components/Header/Header";
import { ChatWall } from "../../Components/ChatWall/ChatWall";
import { Box, Grid} from "@mui/material";
import { ChatList } from "../../Components/ChatWall/ChatList";

export const Chat: FC = () => {
  return (
    <div>
      <Header />
      <Box sx={{backgroundColor:"GrayText", minHeigth:"100vh"}}>
      <Grid container spacing={0} >
        <Grid item xs={4} className={"borderRight500"}>
        <ChatList/>
        </Grid>
        <Grid item xs={8}>
          <ChatWall />
        </Grid>
      </Grid>
              </Box>
    </div>
  );
};
