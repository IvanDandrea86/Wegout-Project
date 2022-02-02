import { FC, useContext, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import DrawerFilter from "../../Filter/DrawerFilter";
import { FriendsSearch } from "../Search/FriendsSearch";
import { FriendsContext } from "../../Context/FriendsProvider"
const Navbar: FC = () => {
  const friend = useContext(FriendsContext);
  const [search, setSearch] = useState<boolean>(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button variant="text">Today</Button>
            <Button variant="text">Suggested for you</Button>
            <DrawerFilter />
            <Button
              variant="text"
              onClick={() => {
                setSearch(!search);
                friend.setUserName("");
                friend.setFriends(false);
              }}
            >
              Find People
            </Button>
            {search ? <FriendsSearch /> : null}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
