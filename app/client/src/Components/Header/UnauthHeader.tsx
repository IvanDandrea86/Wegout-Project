import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import logo from "../../Assets/Images/logo.svg";
import Translator from "../../Utils/Translator";
import ThemeSwitch from "../../Components/ThemeSwitch/ThemeSwitch";
import Grid from "@mui/material/Grid";

const UnauthHeader: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton aria-label="" href="/">
            <img
              src={logo}
              alt="logo"
              style={{
                flex: 1,
                alignSelf: "stretch",
                width: 110,
                height: 60,
                marginTop: 10,
              }}
            />
          </IconButton>
          <Grid container spacing={2}></Grid>
          <Grid item>
            <Button variant="contained" color="secondary" href="/login">
              <Translator trad="login" />
            </Button>
          </Grid>
          <Grid item>
          <Button variant="outlined" color="secondary" href="/register">
            <Translator trad="register" />
          </Button>
          </Grid>
          <ThemeSwitch />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default UnauthHeader;
