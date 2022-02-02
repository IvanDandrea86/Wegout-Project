
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { FOOTER_TEXT } from "../../Utils/constants";
export const  Copyright=()=> {
    return (
      <Typography variant="body2" color="text.secondary" textAlign={"center"}>
        {FOOTER_TEXT + " "}
        <Link color="inherit" href="https://wegout.herokuapp.com/">
          WeGOut.io
        </Link>{" "}
      </Typography>
    );
  }