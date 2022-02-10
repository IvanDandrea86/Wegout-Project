import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import logo from "../../Assets/Images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useMutation, gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { Button, Grid } from "@mui/material";
import { iconNav } from "../../Assets/Style/style";
import { headerContainer } from "./Header.style";
import { UserContext } from "../../Context/UserContext";
import Loading from "../Utility/Loading";
import ErrorMess from "../Utility/ErrorMess";

const LOGOUT_MUT = gql`
  mutation {
    logout
  }
`;
const RECIVEDMESSAGE=gql`
query($userId:String!){messageRecived(userId:$userId){ users _id}}
`


export default function Header() {
  const user=useContext(UserContext)
 
  const navigate = useNavigate();
  const {data,loading,error}=useQuery(RECIVEDMESSAGE,{variables:{
    userId:user._id}
  })
  const [logout] = useMutation(LOGOUT_MUT);
 

  const logoutEvent = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
    navigate("/");
    window.location.reload();
  };

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleClick=()=>{
    
      console.log("iclicke")
      navigate("/chat")
  }
  
  


  if (loading){return <Loading/>}
  if(error){return <ErrorMess/>}
 if(data){
   console.log(data.messageRecived.length)
 }

  

 
 

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem  onClick={handleClick} >
        <IconButton 
        size="large" aria-label="show 4 new mails" color="primary">
          <Badge badgeContent={data.messageRecived.length} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <ThemeSwitch />
      </MenuItem>
    </Menu>
  );

 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton aria-label="" href="/">
            <img
              src={logo}
              alt="logo"
              style={iconNav}
            />
          </IconButton>
          <Grid
            container
            spacing={0}
            sx={headerContainer}
          >
            <Grid item sx={{ alignSelf: "center" }}>
              <Button variant="text" color="inherit" href="/profile">
                Profile
              </Button>
              <Button variant="text" color="inherit" onClick={logoutEvent}>
                Logout
              </Button>
            </Grid>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Grid item>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                  onClick={()=>{navigate("/chat")}}
                >
                  <Badge badgeContent={data.messageRecived.length} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>

                <ThemeSwitch />
              </Grid>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  ) 

}
