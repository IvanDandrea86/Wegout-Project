import { useContext } from "react";
import { Grid, CssBaseline, Typography } from "@mui/material";
import { UserContext } from "../../Context/UserContext";

export const Dashboard = () => {
  const user = useContext(UserContext);
  return (
    <Grid container spacing={2}>
      <CssBaseline />
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
        }}
      >
        <Typography variant="h5" color="primary">
          {user.firstname}
          {user.lastname}
        </Typography>

        
      </Grid>
    </Grid>
  );
};

export default Dashboard;
