import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Typography from "@mui/material/Typography";
import { getEventsDetails } from "../../Utils/getEventDetails";
import { Box, Grid, Paper } from "@mui/material";
import { flexColumCenter ,flexRowCenter} from "../../Assets/Style/style";
import {IDetails} from "../../Types/types"
import { qualityImgage } from "../../Utils/qualityImages";
import { Bar } from "../../Components/ChatWall/Bar";
import { Chat } from "../../Components/ChatWall/Chat";



export const Event: FC = () => {
  const { id } = useParams();
  const [details, getDetails] = useState<IDetails>();

  useEffect(() => {
    getEventsDetails(id as string, getDetails);
  }, [id]);

 const link=qualityImgage(details as IDetails ) 
 console.log(link)
  return (
    <div>
      <Header />
      <div style={{height:"100%"}}>
      {link && details ? (
        <Box
          sx={{
            position: "relative",
            opacity: 0.8,
            zIndex: -1,
            // top: "-225px",
            height: "35vh",
            width: "100%",
            // borderRadius: "25%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${link})`,
        }}
        >
  </Box>
    ) : null}
    <Grid container spacing={2} sx={{...flexColumCenter}}>
        <Grid item xs={12}>
          <Typography variant="h4" margin={30} sx={{fontWeight: "bold",textAlign:"center"}}>{details?.name} </Typography>
          <Typography variant="subtitle1" margin={30} sx={{fontWeight: "bold",textAlign:"center"}}>{details?.name} </Typography>
        </Grid>
        <Grid container spacing={2} sx={{...flexRowCenter, flexWrap:"wrap",padding:10}}>
        <Grid item xs={4}>
           <Paper>
People Interested
               </Paper>
        </Grid>
        <Grid item xs={8}>
        
       
        <Chat/>
        
          </Grid>
           </Grid>
      
    </Grid>
</div>
    </div>
  );
};
