import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Typography from "@mui/material/Typography";
import { getEventsDetails } from "../../Utils/getEventDetails";
import { Box, Grid, Paper } from "@mui/material";
import { flexColumCenter } from "../../Assets/Style/style";
import {IDetails} from "../../Types/types"
import { qualityImgage } from "../../Utils/qualityImages";



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
          <Grid sx={flexColumCenter}>
       
        <Typography
        variant="h4"
        sx={{ textAlign: "center",top:"0px"}}
        >
        {" "}
        {details.name}
      </Typography>
          </Grid>
      </Box>
      ) : null}
   
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "grey.800",
          height: "500px",
          right: 0,
          width: "250px",
          mb: 4,
          opacity: 0.8,
        }}
      ></Box>
      <Box
        sx={{
          height: "500px",
          width: "250px",
          left: 0,
          position: "absolute",
          backgroundColor: "grey.800",
          mb: 4,
          opacity: 0.8,
        }}
      ></Box>
    </div>
  );
};
