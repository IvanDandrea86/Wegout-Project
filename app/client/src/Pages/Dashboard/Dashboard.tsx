import { useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Grid } from "@mui/material";
import { UserContext } from "../../Context/UserContext";

export const Dashboard = () => {
  const user =useContext(UserContext)
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
        }}
      >
        <Header />
          Welcome 
        {user.firstname}
        {user.lastname}
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
