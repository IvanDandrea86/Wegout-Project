import { useContext, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import FindMe from "../../Utils/geoLocation";
import EventCard from "../Card/eventCard";
import { useEffect } from "react";
import { getEvents_new } from "../../Utils/getEvents_new";
import EventCardSkeleton from "../Skeleton/EventCardSkeleton";
import { filterContext } from "../../Context/FilterContext";

export const Dashboard = () => {
  const user = useContext(UserContext);
  const filter = useContext(filterContext);
  const [events, setEvents] = useState<Array<any>>([] as any);
  useEffect(() => {
    getEvents_new(
      filter.cat,
      filter.sort,
      filter.page,
      filter.radius,
      filter.size,
      setEvents
    );
  }, [filter]);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        sx={{
          m: 25,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" color="primary">
          Hey {user.firstname} where you want to go...
        </Typography>
        <Typography variant="h5" color="primary">
          Here the next events in <FindMe />
        </Typography>
      </Grid>
      {/* </Grid> */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          display: "flex",
          flexDirection: "row",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {events
          ? events.map((event: any) => (
              <Grid
                item
                xs={12}
                md={3}
                key={event.id}
                sx={{
                  m: 1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ boxShadow: 5 }}>
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
    </Grid>
  );
};

export default Dashboard;
