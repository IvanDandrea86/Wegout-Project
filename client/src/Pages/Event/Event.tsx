import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Typography from "@mui/material/Typography";
import { getEventsDetails } from "../../Utils/getEventDetails";
import { Box, Grid, Paper } from "@mui/material";
import { flexColumCenter ,flexRowCenter} from "../../Assets/Style/style";
import {IDetails} from "../../Types/types"
import { qualityImgage } from "../../Utils/qualityImages";
import { Chat } from "../../Components/ChatWall/Chat";
import { InterestedList } from "../../Components/InterestedList/InterestList";



export const Event: FC = () => {
  const { id } = useParams();
  const [details, getDetails] = useState<IDetails>();

  useEffect(() => {
    getEventsDetails(id as string, getDetails);
  }, [id]);

 const link=qualityImgage(details as IDetails ) 

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
            height: "25vh",
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
          <Paper  elevation ={5} sx={{
            position:"absolute",
            top:"15rem",
            right:"9%",
            left:'9%',
            marginBottom:"30px"
          }}>
          <Typography variant="h4" margin={15} sx={{fontWeight: "bold",textAlign:"center"}}>{details?.name} </Typography>
          <Typography variant="subtitle1" margin={15} sx={{fontWeight: "bold",textAlign:"center"}}>{details?.name} </Typography>
          </Paper>
        </Grid>
        <Grid container spacing={2} sx={{...flexRowCenter, flexWrap:"wrap",padding:10,marginTop:"15rem"}}>
        <Grid item xs={10}>
           <Paper>
           <InterestedList details={details}/>
                          </Paper>
        </Grid>
           </Grid>
      
    </Grid>
</div>
    </div>
  );
};
