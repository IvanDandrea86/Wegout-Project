
import Grid from "@mui/material/Grid";
import Localization from "../Localization/Localization";
import { footerDiv } from "./Footer.style";
import {Copyright} from "./Copyright"

const Footer = () => {
  return (
    <Grid container sx={footerDiv}>
      <Copyright />
      <Localization />
    </Grid>
  );
};
export default Footer;
