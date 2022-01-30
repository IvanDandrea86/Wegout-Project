import React, { FC,useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import logo from "../../Assets/Images/logo.svg";
import Translator from "../../Utils/Translator";
import ThemeSwitch from "../../Components/ThemeSwitch/ThemeSwitch";
import Grid from "@mui/material/Grid";
import { navigatioContext } from "../../Context/NavContext";




const UnauthHeader: FC = (props) => {
  const navigation=useContext(navigatioContext)

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
            <Button variant="text"  onClick={()=>{navigation.setLink("login")}}>
              <Translator trad="login" />
            </Button>
          </Grid>
          <Grid item>
          <Button variant="text"  onClick={()=>{navigation.setLink("register")}}>
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
