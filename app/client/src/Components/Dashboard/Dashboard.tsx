import { useContext,useState } from "react";
import { Grid,  Typography,Box,  } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import FindMe from '../../Utils/geoLocation'
import EventCard from "../Card/eventCard";
import axios from "axios";
import { useEffect } from "react";


import {getEvents_new} from "../../Utils/getEvents_new"
import EventCardSkeleton from "../Skeleton/EventCardSkeleton";


export const Dashboard = () => {
  const user = useContext(UserContext);
 const [events,setEvents]=useState<Array<any>>([]as any)

  
   useEffect(()=>{ 
    
      getEvents_new(setEvents)

    },[])
    


  return (
    <Grid container spacing={2}>
 
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          mb: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height:"85vh"
        }}
      >
        <Typography variant="h5" color="primary">
          {user.firstname}
          {user.lastname}
        </Typography>
        <FindMe/>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {/* { events ? events.map((event:any) => (
          <Grid item xs={12} sm={4} md={4} key={event.id}>
           <EventCard   id={event.id} />
          </Grid>))
        :
        Array.from(Array(12)).map((_, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
           <EventCardSkeleton />
          </Grid>
        ))
      
         }  */}
      </Grid>
    </Box>
          

        
      </Grid>
    </Grid>
  );
};

export default Dashboard;
