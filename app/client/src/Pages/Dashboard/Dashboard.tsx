import { FC, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import {  Link } from "@mui/material";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Grid } from "@mui/material";

export const Dashboard = () => {
  const context = useContext(AuthContext);
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
        {context.auth ? (
          "Welcome User"
        ) : (
          <Link href="/login" variant="body2">
            You are not logged in go Signin ?
          </Link>
        )}
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
