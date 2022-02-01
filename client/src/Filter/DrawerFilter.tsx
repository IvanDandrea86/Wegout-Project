import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SliderRadius from "./SliderRadius";
import AccordionFilters from "./AccordionFilters";
import { CustomSearch } from "../Components/Search/CustomSearch";

export default function DrawerFilter() {
  const [state, setState] = useState<boolean>();

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
    
      setState(!state);
    };

  const list = () => (
    <Box
      role="filters"
      sx={{
        width: "350px",
      }}
    >
        <Grid container spacing={2} sx={{display:"flex", flexDirection:"column",alignItems:"center", p:5}}>
          
      <Typography variant="h5" color="inherit">
        Hi folks
      </Typography>
      <Grid container spacing={2}>
        <Grid item sx={{p:10, m:15}}>
          <CustomSearch />
        </Grid>
        <Grid item sx={{p:10, m:15}}>
          <SliderRadius />
        </Grid>
        <Grid item sx={{p:10, m:15}}>
          <AccordionFilters />
        </Grid>
      </Grid>
        </Grid>
    </Box>
  );

  return (
    <div>
      <Button variant="text" onClick={toggleDrawer()}>
        Filter
      </Button>
      <Drawer
        sx={{
          opacity: "1",
        }}
        open={state}
        onClose={toggleDrawer()}
      >
        {list()}
      </Drawer>
    </div>
  );
}
