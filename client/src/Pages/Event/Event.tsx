import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Typography from "@mui/material/Typography";
import { getEventsDetails } from "../../Utils/getEventDetails";
import { Box, Grid, Paper } from "@mui/material";
import { flexColumCenter ,flexRowCenter} from "../../Assets/Style/style";
import {IDetails} from "../../Types/types"
import { qualityImgage } from "../../Utils/qualityImages";
import EventIcon from '@mui/icons-material/Event';
import { InterestedList } from "../../Components/InterestedList/InterestList";
import LocationCityIcon from '@mui/icons-material/LocationCity';

import { BackFab } from "../../Components/Utility/BackFab";



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
            height: "25vh",
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${link})`,
        }}
        >
          </Box>
    ) : null}
    <Grid container spacing={1} sx={{...flexColumCenter}}>
        <Grid item xs={12}>
          <Paper  elevation ={5} sx={{
            position:"absolute",
            top:"15rem",
            right:"9%",
            left:'9%',
            // marginBottom:"0px",
            paddingBottom:"10px"
          }}>
          <Typography variant="h4" margin={1} sx={{fontWeight: "bold",textAlign:"center"}}>{details?.name} </Typography>
        <Grid item sx={flexRowCenter}>
           <EventIcon/>
           <Typography variant="subtitle1" margin={2} sx={{fontWeight: "bold",textAlign:"center"}}>{details?.dates.start.localDate} </Typography>
        </Grid>
        <Grid item sx={flexRowCenter}>
        <LocationCityIcon/>
          <Typography variant="subtitle2" margin={2} sx={{fontWeight: "bold",textAlign:"center"}}>{details?._embedded.venues[0].name} </Typography> 
       </Grid>
          </Paper>
         
        </Grid>
        <Grid container spacing={2} sx={{...flexRowCenter, flexWrap:"wrap",padding:10,marginTop:"10rem"}}>
        <Grid item xs={10}>
           <Paper>
           <InterestedList details={details}/>
                          </Paper>
        </Grid>
           </Grid>
      
    </Grid>
   
    <BackFab/>
</div>
    </div>
  );
};
