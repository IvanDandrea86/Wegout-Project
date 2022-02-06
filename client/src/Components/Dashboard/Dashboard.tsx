import { useContext, useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import FindMe from "../../Utils/geoLocation";
import EventCard from "../Card/eventCard";
import { useEffect } from "react";
import { getEvents_new } from "../../Utils/getEvents_new";
import EventCardSkeleton from "../Skeleton/EventCardSkeleton";
import { filterContext } from "../../Context/FilterContext";
import { title } from "./Dashboard.style";
import { flexColumCenter, flexRowCenter} from "../../Assets/Style/style"
import { GeoContext } from "../../Context/GeoProvider";

export const Dashboard = () => {
  const user = useContext(UserContext);
  const filter = useContext(filterContext);
const geo=useContext(GeoContext)
  const [events, setEvents] = useState<Array<any>>([]as any);
  const latlon = geo.lat.toString()+ "," +geo.long.toString();
    useEffect(() => {
    getEvents_new(
      filter.cat,
      filter.sort,
      filter.page,
      filter.radius,
      filter.size,
      filter.keyword,
      latlon,
      setEvents
    );
  }, [filter,latlon]);

  return (
    <Grid container  sx={flexColumCenter}>
      <Grid
        item
        sx={title}
      >
        <Typography variant="h5" color="primary">
          Hey {user.firstname} where you want to go...
        </Typography>
        <Typography variant="h5" color="primary">
          Here the next events near <FindMe />
        </Typography>
      </Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
        sx={{...flexRowCenter}}
      >
        {events
          ? events.map((event: any) => (
              <Grid item xs={12} sm={4} md={4} key={event.id} sx={{...flexRowCenter,marginBottom:15}}>
                <Box sx={{ boxShadow: 5}}>
                  <EventCard details={event} />
                </Box>
              </Grid>
            ))
          : Array.from(Array(12)).map((_, index) => (
              <Grid item xs={12} sm={3} md={4} key={index}>
                <EventCardSkeleton />
              </Grid>
            ))}
      </Grid>
      <Button variant="contained" >
        Load More...
      </Button>
    </Grid>
  )
};

export default Dashboard;
